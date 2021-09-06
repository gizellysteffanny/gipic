<template>
	<article class="card">
		<img :src="photo.preview" :alt="photo.title" />

		<p :title="photo.title">{{ photo.title }}</p>

		<button>
			<img class="ic-download" src="../assets/images/download.svg" alt="Download photo" />
		</button>
	</article>
</template>

<script>
export default {
	props: ['photo']
}
</script>

<style lang="scss" scoped>
	.card {
		flex: 0 0 calc(220px - 16px);
		width: 220px;
		height: 320px;
		background-color: #232441;
		margin-right: 16px;
		overflow: hidden;
		position: relative;

		img {
			&:not(.ic-download) {
				max-width: 100%;
				min-width: 100%;
				height: 100%;
				object-fit: cover;
				transition: transform 200ms ease-in;
				position: relative;
				z-index: 1;
			}
		}

		button {
			background-color: rgba($color: #000000, $alpha: 0.7);
			border: none;
			outline: none;
			cursor: pointer;
			position: absolute;
			top: 0;
			height: 100%;
			width: 100%;
			opacity: 0;
			transition: opacity 200ms ease-in;

			img {
				width: 32px;
				height: 32px;
			}
		}

		p {
			position: absolute;
			bottom: 0;
			left: 0;
			padding: 4px 8px;
			z-index: 1;
			text-overflow: ellipsis;
			overflow: hidden;
			width: 100%;
			white-space: nowrap;
			background-color: rgba(0, 0, 0, 0.2);
		}

		&:hover {
			img {
				transform: scale(1.2);
				z-index: 0;
			}

			button {
				opacity: 1;
			}
		}
  	}
</style>