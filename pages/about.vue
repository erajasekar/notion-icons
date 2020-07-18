<template>
  <section class="content">
    <section class="hero mt-10 is-medium is-bold about-card">
      <div class="container">
        <div class="hero-body">
          <div class="qa">
            <h1>
              Why did I build Notion Icons?
            </h1>
            <p>
              I switched to Notion for note taking and have been loving it. I use the popular
              <a href="https://youtu.be/FZIMlWLW4gU" target="_blank"> PARA </a> ( Projects, Areas, Resources, Archieve )
              method to save resources I learn from all sources like blogs, videos , podcasts, books etc.
              I like using colorful Icons in notes as it gives a quick visual context. Here is example from my Notion.
            </p>
            <figure class="image">
              <img class="box" src="~assets/notions-related-icons.png" alt="Raja Notion Screen shot">
            </figure>
            <p>
              Notions comes with only limited set of icons. We can get beautiful icons from many websites like
              <a href="https://icons8.com/" target="_blank"> Icon8 </a> ,
              <a href="https://www.flaticon.com/" target="_blank"> Flaticon </a> .
              But it is painful to add icons from those websites to notion notes.  I need to first find the right icon from thousands of icons,
              then customize and download to my computer. After that I can upload new icon to Notion.
            </p>
            <p>
              I searched for better solution and found easy to use Icons from <a href="https://www.notion.vip/icons/" target="_blank"> notion.vip </a>,
              but again it doesn't have all the Icons I want to use. But I like it's idea.
            </p>
            <p>
              I also saw from reddit posts that other people are also looking for solution to this problem. So I decided to build this tool Myself
              and share it with the Notion community.
            </p>
          </div>
          <hr>
          <div class="">
            <h2 class=" mt-10 mb-16">
              Frequently Asked Questions
            </h2>
            <div class="qa">
              <h3>
                Why there is only limited set of Icons available ?
              </h3>
              <p>
                I have only added Icons I use in My Notion. More icons we add, it becomes harder to choose right one
                (<a href="https://en.wikipedia.org/wiki/The_Paradox_of_Choice" target="_blank"> Paradox Of Choice </a>).
                I would like to crowd source best Icons for Notion from the community. So please feel to
                <a @click="scrollTo('how-to-contribute')">contribute. </a>
              </p>
            </div>
            <div class="qa">
              <h3>
                How is current icons currated ?
              </h3>
              <p>
                After experimenting with different style of Icons from both
                <a href="https://icons8.com/" target="_blank"> Icon8 </a> ,
                <a href="https://www.flaticon.com/" target="_blank"> Flaticon </a>.
                I found <a href="https://icons8.com/icons/material" target="_blank">  Material filled style icons </a>
                looks best on Notion. Also it's easy to customize the icon color in icon8 so that it will look beautiful in both light and dark mode.
              </p>
              <p>
                So I have decided to include material filled icons from Icon8.
              </p>
            </div>
            <div class="qa">
              <h3>
                I don't find the Icon I want, What should I do ?
              </h3>
              <p ref="how-to-contribute">
                Please follow these instructions to contribute more Icons.
              </p>
              <ol>
                <li>
                  Go to <a href="https://icons8.com/icons/material" target="_blank"> Icons8 Material style icons </a>.
                </li>
                <li>
                  Search for your icon with keyword. For e.g <code>facebook</code>.
                </li>
                <li>
                  Click on the icon you want and click <code>Embed HTML Button</code>.
                </li>
                <li>
                  Copy name of the icon from last part of img src url.
                  For eg. In url <code>https://img.icons8.com/material/24/000000/facebook-new.png</code>.
                  Icon name is <code>facebook-new</code>
                </li>
                <li>
                  Fork Notion Icons <a href="https://github.com/erajasekar/notion-icons/" target="_blank">Git Repo</a>.
                </li>
                <li>
                  Open file <code>/config/icons-config.json</code> in your favorite editor.
                </li>
                <li>
                  Add a new section for icon with <code>name</code> and <code>tags</code>.
                  <ul>
                    <li>
                      For name, use <code>name</code> copied from img url.
                    </li>
                    <li>
                      Optionally add any other search keywords to <code>tags</code>. For eg adding "social" to facebook icon will make this show if you search for "social".
                    </li>
                    <li>
                      Example code for above facebook icon.
                      <div class="mt-5" style="background: #f8f8f8; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .2em;padding:.2em .6em;">
                        <pre style="margin: 0; line-height: 125%">
                          {
                            <span style="color: #008000; font-weight: bold">&quot;name&quot;</span> : <span style="color: #BA2121">&quot;facebook-new&quot;</span>,
                            <span style="color: #008000; font-weight: bold">&quot;tags&quot;</span> : [<span style="color: #BA2121">&quot;social&quot;</span>]
                          }
                        </pre>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  Commit and send a pull request in Github.
                </li>
                <li>
                  Once your code is merged, it will be show up notion icons.
                </li>
              </ol>
            </div>
            <div class="qa">
              <h3>
                I am not familiar with using Github pull request, Is there another way request Icons ?
              </h3>
              <p>
                Github pull request is the preffered and fasted method. But if you can't do it, no worries.
                You can file Github issue by following these steps:
                <ul>
                  <li>
                    Go to <a href="https://github.com/erajasekar/notion-icons/issues/new/choose" target="_blank">Github Issues</a>.
                  </li>
                  <li>
                    Click on <code>Get started</code> button next to <code>New Icon Add Request</code>
                  </li>
                  <li>
                    Please follow instructions on the issue template.
                  </li>
                </ul>
              </p>
            </div>
            <div class="qa">
              <h3>
                Can I request other style of icons from icon8 icons or icons from other sites flaticon?
              </h3>
              <p>
                No. The currently only Icon8 Material Icons are only supported.
              </p>
            </div>
            <div class="qa">
              <h3>
                Is it free to use ?
              </h3>
              <p>
                You can use Icons8 for free, but link to Icons8 website.
                Please see <a href="https://icons8.com/license" target="_blank">license terms </a> for more information.
              </p>
            </div>
            <div class="qa">
              <h3>
                Notions Icons hosted at your personal domain ? Will there any problem if this tool move to different address ?
              </h3>
              <p>
                The icons are not served from <code>notion.erajasekar.com</code>. The copied Icon url is original img src from Icon8.
                So there won't be any this tool moves to different domain in future.
              </p>
            </div>
            <div class="qa">
              <h3>
                I found some problems or something is not working, What should I do ?
              </h3>
              <p>
                Please submit a issue Github. Go to <a href="https://github.com/erajasekar/notion-icons/issues/new/choose" target="_blank">Github</a>.
                Click on <code>Get started</code> button next to <code>Bug report</code>. Follow the instructions on template.
              </p>
            </div>
            <section class="qa">
              <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3" :open="false">
                <div
                  slot="trigger"
                  slot-scope="props"
                  class="card-header"
                  role="button"
                  aria-controls="contentIdForA11y3"
                >
                  <h3 class="card-header-title">
                    I found some problems or something is not working, What should I do ?
                  </h3>
                  <a class="card-header-icon">
                    <b-icon
                      :icon="props.open ? 'menu-down' : 'menu-up'"
                    />
                  </a>
                </div>
                <div class="card-content">
                  <p class="content">
                    Please submit a issue Github. Go to <a href="https://github.com/erajasekar/notion-icons/issues/new/choose" target="_blank">Github</a>.
                    Click on <code>Get started</code> button next to <code>Bug report</code>. Follow the instructions on template.
                  </p>
                </div>
              </b-collapse>
            </section>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class About extends Vue {
  scrollTo (refName: any) {
    const offsetTopProperty = 'offsetTop'
    const top = (this.$refs[refName] as any)[offsetTopProperty]
    window.scrollTo(0, top)
  }
}
</script>
<style scoped>

  h1, h2 {
    color: #EC2D2A
  }

  h3 {
    color: #2c7a7b
  }

  p {
    font-size: x-large;
    font-weight: 500;
  }

  li {
    font-size: x-large;
    line-height: 40px;
  }

  .qa {
    padding: 20px 0px 20px 0px;
    /* background-color: #F4F0E7;
    margin-top: 10px;*/
  }

  .card {
     background-color: #FAF7F0;
  }

  .about-card {
   /* background-color: #F4F0E7; */
   background-color : white;
   box-shadow: 0 2px 2px 0 rgba(34, 41, 47, 0.05), 0 8px 8px 0 rgba(34, 41, 47, 0.05);
  }

  .image img {
    width: 70%;
  }

</style>
