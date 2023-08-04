<script lang="ts">
	import GradientText from '../GradientText.svelte';

	// props
	export let title: string = 'Feature Card';
	export let svg: string = `<path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />`;
	export let description: string =
		' We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.';
</script>

<div
	class="w-full h-full px-4 group md:hover:scale-105 scale-90 md:scale-100 transition ease-in-out cursor-pointer"
>
	<div class="group-hover:shadow-2xl h-full bg-gradient-to-br from-cyber-200 via-cyber-100 to-cyber-300 p-2 rounded-2xl">
		<div class="rounded-2xl bg-white/80 h-full p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
      <!-- svg  -->
			<div class="flex mb-5 items-center justify-center rounded-2xl">
				<div class="bg-gradient-to-br from-cyber-200 to-cyber-300 p-1 rounded-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2.5"
						stroke="white"
						class="w-11 h-11 m-2"
					>
						{@html svg}
					</svg>
				</div>
			</div>
      <!-- text  -->
<div class="text-center">
  <h4 class="text-cyber-300 mb-3 text-2xl font-extrabold tracking-wide">
    <GradientText text={title} />
  </h4>
  <p class="text-cyber-300/80">
    {description}
  </p>
</div>
		</div>
	</div>
</div>
