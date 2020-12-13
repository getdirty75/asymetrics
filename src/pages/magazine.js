
import React from "react";

// const options = [
//   {label: "News / Tunes / Update", value: "news"},
//   {label: "Mixtapes / Playlists / Podcasts", value: "mixtapes"},
//   {label: "Knowledge / Wisdom / Rhythm", value: "knowledge"},
//   {label: "Artworks / Pictures / Design", value: "artworks"},
//   {label: "Stories / Movies / Books", value: "stories"},
//   {label: "Reports / Facts / Subjects", value: "reports"},
// ]

const MagazinePage = () => {

  return(
    <div className="container section">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child box">
                <p class="subtitle">News / Tunes / Update</p>
              </article>
              <article class="tile is-child box">
                <p class="subtitle">Mixtapes / Playlists / Podcasts</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="subtitle">Stories / Movies / Books</p>
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png" />
                </figure>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="subtitle">Reports / Facts / Subjects</p>
              <div class="content">

              </div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <div class="content">
              <p class="subtitle">Knowledge / Wisdom / Rhythm</p>
              <div class="content"></div>
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-12">
        <article class="tile is-child box">
          <p class="subtitle">Artworks / Pictures / Design</p>
          {/* <div class="content">
          </div> */}
        </article>
      </div>
    </div>
  )
}

export default MagazinePage
