<template>
  <div class="my-3 mb-lg-5">
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand to="/">
        <svg viewBox="0 0 16 16" class="logo mr-2" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M0 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3zm5.5 1a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        </svg>
        dotnet jobs
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto mt-2 mt-lg-0 align-items-center">
          <b-nav-item to="/" exact-active-class="active">Jobs</b-nav-item>
          <b-nav-item to="companies" exact-active-class="active" class="mx-lg-3">Companies</b-nav-item>
          <b-nav-item to="post-job" exact-active-class="disabled">
            <b-button variant="danger" class="mt-3 mt-lg-0">Post Job</b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
.logo {
  width: 25px;
  height: 25px;
}

.active {
  padding-bottom: 0.3rem;
  border-bottom: 3px solid lightgray;
}

.disabled > .btn {
  opacity: 0.65;
}

.navbar-toggler {
  border-color: transparent;
}
</style>