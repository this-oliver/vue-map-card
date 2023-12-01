<script setup lang="ts">
import { computed, reactive, watch, onMounted } from 'vue';

export interface MapCardProps {
  /**
   * Latitude
   */
  lat?: number;
  /**
   * Longitude
   */
  lng?: number;
  /**
   * Street name
   */
  street?: string;
  /**
   * Postal code
   */
  post?: string;
  /**
   * City
   */
  city?: string;
  /**
   * Region
   */
  region?: string;
  /**
   * Country
   */
  country?: string;
  /**
   * Zoom level (0-50)
   */
  zoom?: number;
  /**
   * Width of the map container
   */
  width?: string;
  /**
   * Height of the map container
   */
  height?: string;
}

const props = withDefaults(defineProps<MapCardProps>(), {
  lat: undefined,
  lng: undefined,
  street: undefined,
  post: undefined,
  city: undefined,
  region: undefined,
  country: undefined,
  zoom: 5,
  width: '100%',
  height: '350px'
})

const coordinates = reactive<{ lat: number; lng: number }>({
  lat: props.lat || 0,
  lng: props.lng || 0
});

/**
 * Builds address string from props
 */
const autoAddress = computed<string>(() => {
  let address = '';

  if (props.street) {
    address += `${props.street}, `;
  }

  if (props.post) {
    address += `${props.post} `;
  }

  if (props.city) {
    address += `${props.city}`;
  }

  if (props.region) {
    address += `, ${props.region}`;
  }

  if (props.country) {
    address += `, ${props.country}`;
  }

  return address;
});

/**
 * Builds zoom level for OpenStreetMap iframe. The smaller the zoom level, the closer the map is.
 * 
 * Try to keep the zoom level between 0 and 50 (although it's possible to go higher).
 */
const zoom = computed<number>(() => {
  return props.zoom / 5000;
});

/**
 * Builds OpenStreetMap URL used in iframe src attribute from coordinates
 */
const openStreetMapUrl = computed<string>(() => {
  const x1 = coordinates.lng - zoom.value;
  const y1 = coordinates.lat - zoom.value;
  const x2 = coordinates.lng + zoom.value;
  const y2 = coordinates.lat + zoom.value;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${x1}%2C${y1}%2C${x2}%2C${y2}&amp;layer=mapnik&amp;marker=${coordinates.lat}%2C${coordinates.lng}`;
});

/**
 * Builds OpenStreetMap link from coordinates
 */
const openStreetMapLink = computed<string>(() => {
  return `https://www.openstreetmap.org/?mlat=${coordinates.lat}&amp;mlon=${coordinates.lng}#map=18/${coordinates.lat}/${coordinates.lng}`;
});

/**
 * Builds Google Maps link from coordinates
 */
const googleMapsLink = computed<string>(() => {
  return `https://www.google.com/maps/@${coordinates.lat},${coordinates.lng},17z`;
});

/**
 * Builds Apple Maps link from coordinates
 */
const appleMapsLink = computed<string>(() => {
  return `https://maps.apple.com/?ll=${coordinates.lat},${coordinates.lng}`;
});

async function setupCoordinates(address: string): Promise<{ lat: number; lng: number }> {
  const coords: { lat: number; lng: number } = {
    lat: 0,
    lng: 0
  };

  if (address.length > 0) {
    const addressString = encodeURI(address);
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${addressString}&format=json&addressdetails=1&limit=1`);
    const data = await response.json();

    const results = data as any[];

    if (results.length > 0) {
      coords.lat = parseFloat(results[0].lat);
      coords.lng = parseFloat(results[0].lon);
    }
  }

  return coords;
}

watch(autoAddress, async () => {
  if (autoAddress.value.length > 0) {
    const { lat, lng } = await setupCoordinates(autoAddress.value);
    coordinates.lat = lat;
    coordinates.lng = lng;
  }

});

onMounted(async () => {
  if (props.lat !== undefined && props.lng !== undefined) {
    coordinates.lat = props.lat;
    coordinates.lng = props.lng;
    return;

  } else {
    const { lat, lng } = await setupCoordinates(autoAddress.value);
    coordinates.lat = lat;
    coordinates.lng = lng;
  }
});
</script>

<template>
  <div :style="`width: ${props.width}; height: ${props.height}`">
    <iframe width="100%" height="100%" :src="openStreetMapUrl" style="border: 1px solid black" />
    <br>
    <small>
      <a :href="openStreetMapLink" target="_blank">OpenStreetMap</a>
      |
      <a :href="googleMapsLink" target="_blank">Google Maps</a>
      |
      <a :href="appleMapsLink" target="_blank">Apple Maps</a>
    </small>
  </div>
</template>
