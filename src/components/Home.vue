<template>
  <div class="home">
    <div class="nav">
      <div class="logo-container">
        <img class="logo" src="@/assets/logo.jpg" alt="" />
      </div>
      <div class="nav-bar">
        <div class="nav-item">
          <div>
            <p>01782 791234</p>
          </div>
          <div>
            <font-awesome-icon :icon="['fas', 'search']" />
          </div>
          <div>
            <font-awesome-icon :icon="['fas', 'bars']" />
          </div>
        </div>
      </div>
    </div>
    <div><img class="main-image" src="@/assets/school.jpg" alt="" /></div>
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
    <div class="contact-container row m-0">
      <div class="d-none d-lg-block col-lg-4" style="background: black">
        <h3>CONTACT INFORMATION</h3>
        <p>All Saints C.E. (VC) First School & Busy Bees Pre-School</p>
        <p>Church Lane</p>
        <p>Standon</p>
        <p>Staffordshire</p>
        <p>United Kingdom</p>
        <p>ST21 6RN</p>
        <p>T: 01782 791234</p>
        <p>
          E: office@allsaints-standon.staffs.sch.uk (Please address enquiries
          F.A.O. Mrs Bradley)
        </p>
      </div>
      <div class="col-12 col-lg-4" style="background: black">
        <h3>CONTACT INFORMATION</h3>
        <p>All Saints C.E. (VC) First School & Busy Bees Pre-School</p>
        <p>Church Lane</p>
        <p>Standon</p>
        <p>Staffordshire</p>
        <p>United Kingdom</p>
        <p>ST21 6RN</p>
        <p>T: 01782 791234</p>
        <p>
          E: office@allsaints-standon.staffs.sch.uk (Please address enquiries
          F.A.O. Mrs Bradley)
        </p>
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
    img {
      &:hover {
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
        -webkit-transition: all 1s ease;
      }
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
.contact-container {
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
