<template>
  <div class="home">
    <!-- <div><img class="main-image" src="@/assets/school.jpg" alt="" /></div> -->
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/school.jpg" class="d-block main-image" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <div>
              <h1>All Saints C of E First School & Busy Bees Pre-School</h1>
              <button class="btn btn-primary">FIND OUT MORE</button>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/school.jpg" class="d-block main-image" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <div>
              <h1>All Saints C of E First School & Busy Bees Pre-School</h1>
              <button class="btn btn-primary">FIND OUT MORE</button>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/school.jpg" class="d-block main-image" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <div>
              <h1>All Saints C of E First School & Busy Bees Pre-School</h1>
              <button class="btn btn-primary">FIND OUT MORE</button>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon"
          style="height: 10em; width: 10em"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon"
          style="height: 10em; width: 10em"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="row m-0">
      <div class="image-wrapper col-sm-12 col-md-6 col-lg-3">
        <div class="image-container">
          <img class="image-container" src="@/assets/rugby.jpg" alt="" />
          <div style="background: #d90f5a" class="title">
            <p>PASTORAL SUPPORT</p>
          </div>
        </div>
      </div>
      <div class="image-wrapper col-12 col-md-6 col-lg-3">
        <div class="image-container">
          <img src="@/assets/piano.jpg" alt="" />
          <div style="background: #0de5a8" class="title">CALENDAR</div>
        </div>
      </div>
      <div class="image-wrapper col-12 col-md-6 col-lg-3">
        <div class="image-container">
          <img src="@/assets/ducks.jpg" alt="" />
          <div style="background: #30c4c9" class="title">BUSY BEES</div>
        </div>
      </div>
      <div class="image-wrapper col-12 col-md-6 col-lg-3">
        <div class="image-container">
          <img src="@/assets/sports.jpg" alt="" />
          <div style="background: #ff6e27" class="title">NEWS</div>
        </div>
      </div>
      <div class="image-wrapper col-12 col-md-6 col-lg-3">
        <div class="image-container">
          <img src="@/assets/classroom.jpg" alt="" />
          <div style="background: #ffb60b" class="title">CURRICULUM</div>
        </div>
      </div>
      <div class="image-wrapper col-12 col-md-6 col-lg-3">
        <div class="image-container">
          <img src="@/assets/book.jpg" alt="" />
          <div style="background: #4f2958" class="title">FIRST SCHOOL</div>
        </div>
      </div>
      <div class="image-wrapper col-12 col-md-6 col-lg-3">
        <div class="image-container">
          <img src="@/assets/child.jpg" alt="" />
          <div style="background: #212d44" class="title">CHILDREN</div>
        </div>
      </div>
      <div class="image-wrapper col-12 col-md-6 col-lg-3">
        <div class="image-container">
          <img src="@/assets/uniform.jpg" alt="" />
          <div style="background: #88c100" class="title">PARENTS</div>
        </div>
      </div>
    </div>
    <div class="extras-container row m-0">
      <div
        class="links-container d-none d-lg-block col-lg-4"
        style="background: black"
      >
        <div class="links-header">
          <h3>USEFUL LINKS</h3>
        </div>
        <div class="links-wrapper">
          <div class="links-text"><p>Home</p></div>
          <div class="links-text"><p>Latest News</p></div>
        </div>
        <div class="links-wrapper">
          <div class="links-text"><p>Curriculum</p></div>
          <div class="links-text"><p>Calendar Events</p></div>
        </div>
        <div class="links-wrapper">
          <div class="links-text"><p>Academic</p></div>
          <div class="links-text"><p>Galleries</p></div>
        </div>
        <div class="links-wrapper">
          <div class="links-text"><p>Pastoral Support</p></div>
          <div class="links-text"><p>Clubs & Tennis</p></div>
        </div>
        <div class="links-wrapper">
          <div class="links-text"><p>Extra Cirricular</p></div>
          <div class="links-text"><p>Communication</p></div>
        </div>
        <div class="links-wrapper">
          <div class="links-text"><p>Admissions</p></div>
          <div class="links-text"><p>Policies</p></div>
        </div>
        <div class="links-wrapper">
          <div class="links-text"><p>Parents</p></div>
          <div class="links-text"><p>Sitemap</p></div>
        </div>
      </div>
      <div class="contacts-container col-12 col-lg-4" style="background: black">
        <div class="contacts-header">
          <h3>CONTACT INFORMATION</h3>
        </div>
        <div class="contacts-wrapper">
          <div class="contacts-text">
            <p>All Saints C.E. (VC) First School & Busy Bees Pre-School</p>
          </div>
          <div class="contacts-text">
            <p>
              TEL<br />
              01782 791234
            </p>
          </div>
        </div>
        <div class="contacts-wrapper">
          <div class="contacts-text"><p>Church Lane</p></div>
        </div>
        <div class="contacts-wrapper">
          <div class="contacts-text"><p>Standon</p></div>
          <div class="contacts-text">
            <p>EMAIL</p>
          </div>
        </div>
        <div class="contacts-wrapper">
          <div class="contacts-text"><p>Staffordshire</p></div>
          <div class="contacts-text">
            <p>office@allsaints-standon.staffs.sch.uk</p>
          </div>
        </div>
        <div class="contacts-wrapper">
          <div class="contacts-text"><p>United Kingdom</p></div>
        </div>
        <div class="contacts-wrapper">
          <div class="contacts-text"><p>ST21 6RN</p></div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9624.298986518395!2d-2.2816759537218045!3d52.911081876384074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a644b9a6196a7%3A0xec9be70cfa8c88d!2sAll%20Saints%20CE%20(VC)%20First%20School!5e0!3m2!1sen!2suk!4v1624572009630!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="socials-container">
      <font-awesome-icon :icon="['fab', 'facebook-f']" />
      <font-awesome-icon :icon="['fab', 'twitter']" />
      <font-awesome-icon :icon="['fab', 'instagram']" />
      <font-awesome-icon :icon="['fab', 'google-plus-g']" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  props: {
    msg: String,
  },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->j
<style scoped lang="scss">
$black: #000;
$dark-pink: #d90f5a;
$caribbean-green: #0de5a8;
$medium-turquoise: #30c4c9;
$burnt-orange: #ff6e27;
$strong-blue: #005bc5;
$vivid-orange: #ffb60b;
$dark-magenta: #4f2958;
$dark-blue: #212d44;
$strong-green: #88c100;

.socials-container {
  background: #005bc5;
  padding: 20px 30px;
  display: flex;
  svg {
    color: #f5f5f5;
    font-size: 1.2em;
    margin: 0 10px;
  }
}

.carousel {
  z-index: -1;
}
.carousel-caption {
  top: 46%;
  div {
    margin: 0 auto;
    width: 90%;
    button {
      font-weight: bold;
    }
  }
}

.contacts-header,
.links-header {
  margin: 30px;
  display: flex;
  justify-content: left;
}
.contacts-text,
.links-text {
  font-size: 1em;
  text-align: justify;
  text-justify: inter-word;
  margin-left: 30px;
  width: 50%;
  display: flex;
  p {
    margin-bottom: 3px;
  }
}

.contacts-wrapper,
.links-wrapper {
  display: flex;
  flex-direction: row;
}
.nav-bar {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto 15px auto auto;
  .nav-item {
    display: flex;
    div {
      font-size: 1.5em;
      padding: 10px 15px 0 15px;
    }
  }
}
.logo-container {
  display: flex;
  justify-content: center;
  margin-left: 15px;
  .logo {
    margin: auto 0;
    height: 80%;
  }
}

.nav {
  height: 85px;
  background: $dark-blue;
}

.main-image {
  height: 500px;
  width: 100%;
  object-fit: cover;
  object-position: 50% 80%;
}

.image-wrapper {
  padding: 1px;
  .image-container {
    display: flex;
    .title {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    @media (max-width: 767px) {
      flex-direction: row;
    }
    @media (min-width: 768px) {
      flex-direction: column;

      .title {
        height: 80px;
      }
    }
    &:hover {
      filter: grayscale(100%);
      -webkit-filter: grayscale(100%);
      -webkit-transition: all 1s ease;
    }
    img {
      object-position: 20% 80%;
      object-fit: cover;
      @media (max-width: 767px) {
        width: 80px;
        max-height: 80px;
        min-height: 80px;
      }
      @media (min-width: 768px) {
        max-width: 100%;
        min-height: 240px;
        max-height: 240px;
      }
      @media (min-width: 1200px) {
        max-width: 100%;
        max-height: 325px;
        min-height: 325px;
      }
    }
  }
}
.extras-container {
  div {
    padding: 0;
  }
  .map-wrapper {
    height: 417px;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
