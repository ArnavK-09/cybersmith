<script lang="ts">
	// imports
	import ReviewCard from '../Cards/Review.svelte';
</script>

<section
	class="rounded-t-3xl md:rounded-t-[111px] -my-28 bg-gradient-to-t from-cyber-100/30 via-75% via-cyber-100 to-cyber-100"
>
	<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
		<h2
			class="text-center text-3xl md:text-5xl font-extrabold tracking-tight text-cyber-300 leading-relaxed underline"
		>
			Read Thoughts of Daily AI Blogs Reader!
		</h2>
		<p class="text-cyber-300/80 my-4 text-center">
			Hear from our delighted readers! Discover how Cybersmith's AI-generated blogs have captivated
			and enriched the minds of our growing community.
		</p>
		<div class="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
			<!-- reviews  -->
      <div class="relative">
      <div class="gap-6 overflow-x-scroll scroll-container flex-row flex no_scrollbar">
        <ReviewCard />
        <ReviewCard />  
        <ReviewCard /> 
        <ReviewCard />
      </div>
      <div class="gap-6 overflow-x-scroll scroll-container flex-row flex no_scrollbar">
        <ReviewCard />
        <ReviewCard />  
        <ReviewCard /> 
        <ReviewCard />
      </div>
    </div>
			<!-- img  -->
			<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
				<img class="object-cover object-center rounded" alt="bot right" src="/bot/right.png" />
			</div>
		</div>
	</div>
</section>
