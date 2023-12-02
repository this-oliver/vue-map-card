<template>
  <footer class="mt-16 pb-4 w-full flex-center text-primary" text="slate-900 dark:slate-300 opacity-60 sm">
    <div class="copyright flex flex-col justify-center items-center">
      <p class="flex flex-col sm:flex-row items-center space-x-1 space-y-2 sm:space-y-0 mt-2">
      <div class="text-blue-400 flex items-center space-x-1">
        <span>
          <a href="https://www.oliverrr.net">
            Personal
          </a>
        </span>
      </div>
      <span class="px-2 text-gray-300 hidden sm:block">|</span>
      <div class="text-blue-400 flex items-center space-x-1">
        <span>
          <a href="https://www.github.com/this-oliver" target="_blank">
            Github
          </a>
        </span>
      </div>
      <span class="px-2 text-gray-300 hidden sm:block">|</span>
      <div class="text-blue-400 flex items-center space-x-1">
        <span>
          <a href="https://twitter.com/maybeolivier" target="_blank">
            Twitter
          </a>
        </span>
      </div>
      <span class="px-2 text-gray-300 hidden sm:block">|</span>
      <div class="text-blue-400 flex items-center space-x-1">
        <span>
          <span> © {{ new Date().getFullYear() }}</span>
        </span>
      </div>
      </p>
    </div>
  </footer>
</template>
