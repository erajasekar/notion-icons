<template>
  <section class="content">
    <section class="hero card is-medium is-bold who-card">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Who is it for ?
          </h1>
          <p class="text-2xl font-semibold">
            Are you a <a class=" text-teal-300 hover:text-teal-500" href="http://notion.so/" target="_blank"> Notion </a> user ?
            Do you want to organize your notes with beautiful Icons ? This for you!
          </p>
        </div>
      </div>
    </section>
    <section class="hero card mt-10 card is-medium is-bold why-card">
      <div class="hero-body text-gray-900">
        <div class="container">
          <h1 class="title">
            Why do you want to use ?
          </h1>
          <p class="text-2xl">
            Notions comes with only limited set of icons. We can get beautiful icons from many websites like
            <a href="https://icons8.com/" target="_blank"> Icon8 </a> ,
            <a href="https://www.flaticon.com/" target="_blank"> Flaticon </a> .
            But it is painful to add icons from those websites to notion notes.
          </p>
          <p class="text-2xl" >
            You need to first find the right icon from 1000 of icons, then customize and download to your computer.
            After that you can upload new icon to Notion.
          </p>
          <blockquote class="text-2xl">
            Now, You can easily add beautiful icons to your notes using Notion Icons.
          </blockquote>
        </div>
      </div>
    </section>
    <section class="hero card mt-10 card is-medium  is-bold">
      <div class="hero-body text-gray-900">
        <div class="container">
          <h1 class="title">
            How to use it ?
          </h1>
          <div class="text-2xl">
            <ul>
              <li>
                Go to
                <nuxt-link to="/icons">
                  Icons tab
                </nuxt-link>
              </li>
              <li>
                Type keywords in Search box to filter icons.
              </li>
              <li>
                You can customize color by clicking color swatch.
              </li>
              <li>
                If you use dark mode in Notion, you can toggle Dark mode button to see how it looks in dark mode.
              </li>
              <li>
                Click on the Icon to copy url to clipboard.
              </li>
              <li>
                If you use dark mode in Notion, you can toggle Dark mode button to see how it looks in dark mode.
              </li>
              <li>
                Go to your Notion app, click on icon, go to Link tab and paste the copied url.
              </li>
              <li>
                Hit Enter. The icon will be updated.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>

</script>

<style scoped>
  p, blockquote {
    font-family: KoHo,sans-serif;
  }

  blockquote {
    background-color: white
  }

  .why-card {
    background-color: #E7F9EB;
  }

  .who-card {
    background-color: #374454;
    color: white;
  }

  .who-card h1 {
    color: white;
  }

  .card {
    box-shadow: 0 2px 2px 0 rgba(34, 41, 47, 0.05), 0 8px 8px 0 rgba(34, 41, 47, 0.05);
  }
</style>
