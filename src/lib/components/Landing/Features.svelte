<script lang="ts">
	// imports
	import FeatureCard from '../Cards/Feature.svelte';

	// props
	type FeatureCardProps = {
		title: string;
		svg: string;
		description: string;
	};
	// all features
	const features_list: Array<FeatureCardProps> = [
		{
			title: 'New Blogs Daily',
			description:
				'Experience the brilliance of AI-generated blogs crafted uniquely for you each day. From technology to entertainment, science to art, our AI Wordsmiths cover diverse topics with precision and creativity.',
			svg: `<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />`
		},
		{
			title: 'Expert Knowledge',
			description:
				'Cybersmith leverages new age Models, most advanced language models, trained on a vast repository of information. Rest assured, the content you get is enriched with expertise and accuracy.',
			svg: `<path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />`
		},
		{
			title: 'Verified Sources',
			description:
				'Cybersmith ensures that all information in the AI-generated blogs comes from verified and credible sources, providing a reliable platform for knowledge seekers.',
			svg: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />`
		},
		{
			title: 'Topical Archives',
			description:
				'Explore an extensive archive of AI-generated blogs on a wide range of subjects. Unearth fascinating insights from the past and stay informed about the latest trends.',
			svg: `<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />`
		}
	];
</script>

<section
	class="overflow-x-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-gradient-to-t from-cyber-50 via-75% via-cyber-100 to-cyber-200/90"
>
	<div class="container">
		<div class="-mx-4 flex flex-wrap">
			<div class="w-full">
				<div class="mx-auto mb-12 max-w-lg text-center lg:mb-20">
					<span class="text-cyber-300/80 mb-2 block text-lg font-extrabold tracking-wider">
						AI Backed Features....
					</span>
					<h2
						class="text-cyber-300 tracking-wide underline underline-offset-8 mb-4 text-3xl font-extrabold sm:text-4xl md:text-[40px]"
					>
						Our Content Features
					</h2>
					<p class="text-cyber-300/80 font-semibold">
						There are many variations of passages of Lorem Ipsum available but the majority have
						suffered alteration in some form.
					</p>
				</div>
			</div>
		</div>
		<div class="-mx-4 md:px-28 grid gap-4 grid-cols-1 md:grid-cols-2">
			{#each features_list as feature (feature.svg)}
				<FeatureCard {...feature} />
			{/each}
		</div>
	</div>
</section>
