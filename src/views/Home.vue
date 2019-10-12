<template>
<body>
 <!-- Section: Features v.3 -->
<section class="my-5">

  <!-- Section heading -->
  <h2 class="h1-responsive font-weight-bold text-center my-5">Why is it so great?</h2>
  <!-- Section description -->
  <p class="lead grey-text text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam.</p>

  <!-- Grid row -->
  <div class="row">

    <!-- Grid column -->
    <div class="col-lg-5 text-center text-lg-left">
      <img class="img-fluid" width="500" height="600" src="https://cdn.dribbble.com/users/2393122/screenshots/4867275/dribbble.gif" alt="Sample image">
    </div>
    <!-- Grid column -->

    <!-- Grid column -->
    <div class="col-lg-7">

      <!-- Grid row -->
      <div class="row mb-3">

        <!-- Grid column -->
        <div class="col-1">
          <i class="fas fa-share fa-lg indigo-text"></i>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-xl-10 col-md-11 col-10">
          <h5 class="font-weight-bold mb-3">Safety</h5>
          <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad minima veniam,
            quis nostrum exercitationem ullam. Reprehenderit maiores aperiam assumenda deleniti hic.</p>
        </div>
        <!-- Grid column -->

      </div>
      <!-- Grid row -->

      <!-- Grid row -->
      <div class="row mb-3">

        <!-- Grid column -->
        <div class="col-1">
          <i class="fas fa-share fa-lg indigo-text"></i>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-xl-10 col-md-11 col-10">
          <h5 class="font-weight-bold mb-3">Technology</h5>
          <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad minima veniam,
            quis nostrum exercitationem ullam. Reprehenderit maiores aperiam assumenda deleniti hic.</p>
        </div>
        <!-- Grid column -->

      </div>
      <!-- Grid row -->

      <!--Grid row-->
      <div class="row">

        <!-- Grid column -->
        <div class="col-1">
          <i class="fas fa-share fa-lg indigo-text"></i>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-xl-10 col-md-11 col-10">
          <h5 class="font-weight-bold mb-3">Finance</h5>
          <p class="grey-text mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad minima
            veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam assumenda deleniti hic.</p>
        </div>
        <!-- Grid column -->

      </div>
      <!--Grid row-->

    </div>
    <!--Grid column-->

  </div>
  <!-- Grid row -->
</section>
<br><br>
<hr>
<!-- Section: Features v.3 -->
 <section class="py-5 text-center">
      <div class="container"> 
        <h2 class="text-center">Pocemu mi?</h2>
        <p class="text-muted mb-5 text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        <div class="row">
          <div class="col-sm-6 col-lg-4 mb-3">
             <img width="125" height="125" src="https://image.flaticon.com/icons/png/512/130/130304.png">
            <h6>Ex cupidatat eu</h6>
            <p class="text-muted">Ex cupidatat eu officia consequat incididunt labore occaecat ut veniam labore et cillum id et.</p>
          </div>
          <div class="col-sm-6 col-lg-4 mb-3">
             <img width="125" height="125" src="https://image.flaticon.com/icons/png/512/130/130304.png">
            <h6>Tempor aute occaecat</h6>
            <p class="text-muted">Tempor aute occaecat pariatur esse aute amet.</p>
          </div>
          <div class="col-sm-6 col-lg-4 mb-3">
            <img width="125" height="125" src="https://image.flaticon.com/icons/png/512/130/130304.png">
            <h6>Voluptate ex irure</h6>
            <p class="text-muted">Voluptate ex irure ipsum ipsum ullamco ipsum reprehenderit non ut mollit commodo.</p>
          </div>
          <div class="col-sm-6 col-lg-4 mb-3">
             <img width="125" height="125" src="https://image.flaticon.com/icons/png/512/130/130304.png">
            <h6>Tempor commodo</h6>
            <p class="text-muted">Tempor commodo nostrud ex Lorem occaecat duis occaecat minim.</p>
          </div>
          <div class="col-sm-6 col-lg-4 mb-3">
              <img width="125" height="125" src="https://image.flaticon.com/icons/png/512/130/130304.png">
            <h6>Et fugiat sint occaecat</h6>
            <p class="text-muted">Et fugiat sint occaecat voluptate incididunt anim nostrud ea cillum cillum consequat.</p>
          </div>
          <div class="col-sm-6 col-lg-4 mb-3">
             <img width="125" height="125" src="https://image.flaticon.com/icons/png/512/130/130304.png">
            <h6>Et labore tempor et</h6>
            <p class="text-muted">Et labore tempor et adipisicing dolor.</p>
          </div>
        </div>
      </div>
</section>
 </body>
</template>

<style scoped>
button {
   position: absolute;
   right: 50px;
   top:10%;
}
.navbar {
   margin-right: 25;
   position: relative;
   top: 10%;
}
.map-container-section {
  overflow:hidden;
  padding-bottom:56.25%;
  position:relative;
  height:0;
}
.map-container-section iframe {
  left:0;
  top:0;
  height:100%;
  width:100%;
  position:absolute;
}
.img-fluid {
  margin-left: 5%;
}
hr {
  border:none;
  height: 20px;
 	width: 90%;
	height: 50px;
	margin-top: 0;
	border-bottom: 1px solid #1f1209;
	box-shadow: 0 20px 20px -20px #333;
  margin: -50px auto 10px; 
}
</style>

<script>
// @ is an alias to /src
import firebase from 'firebase';

export default {
  name: 'home',
  methods: {
    logout: function() {
      firebase
      .auth()
      .signOut()
      .then(() =>{
        this.$router.replace('login')        
      })
    }
  }
};
</script>

