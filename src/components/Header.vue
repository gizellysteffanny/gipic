<template>
  <header class="container">
    <router-link to="/">
      <img src="../assets/images/logo.svg" alt="GiPic Logo" />
    </router-link>
    <nav>
      <ul>
			<li><router-link to="/contact">Contact</router-link></li>
			<li v-show="hasSearch">
					<svg @click="showSearchBar = !showSearchBar"
						v-show="!showSearchBar"
						width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>

					<transition name="input-search-fade">
						<input type="search" autofocus
							@input="filter = $event.target.value"
							@blur="filter ? showSearchBar = true : showSearchBar = false"
							v-show="showSearchBar"
						/>
					</transition>
			</li>
			<li class="btn-cta"><router-link to="/upload">Upload photos</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
	props: ['hasSearch'],
	data() {
		return {
			showSearchBar: false,
			filter: ''
		}
	}
};
</script>
<style lang="scss" scoped>
header.container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 24px;
	margin-bottom: 72px;

	nav {
		ul {
			display: flex;
			align-items: center;
			list-style: none;

			li {
				cursor: pointer;
				
				a {
					text-decoration: none;
					color: #fff;
				}

				&.btn-cta {
					background-color: #19B858;
					color: #fff;
					padding: 8px 24px;
					border-radius: 24px;

					&:hover {
						background-color: darken($color: #19B858, $amount: 5);
						color: #fff;
					}
				}

				&:not(:last-child) {
					margin-right: 24px;
				}

				&:hover {
					&:not(.btn-cta) {
						a {
							color: #19B858;
						}
					}
				}

				svg {
					width: 16px;
					height: 16px;

					&:hover {
						path {
							stroke: #19B858;
						}
					}
				}

				input {
					height: 40px;
					width: 192px;
					background-color: #232441;
					background-image: url(../assets/images/search.svg);
					background-repeat: no-repeat;
					background-position: 10% center;
					background-size: 16px;
					border: none;
					border-radius: 2px;
					padding: 0 16px 0 32px;
					color: #fff;
					font-size: 16px;
				}

				.input-search-fade-enter,
				.input-search-fade-leave-active {
					width: 0;
				}

				.input-search-fade-enter-active,
				.input-search-fade-leave-active  {
					transition: width 100ms ease-out;
				}
			}
		}
	}
}
</style>