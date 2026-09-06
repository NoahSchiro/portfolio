---
title: AI and Climate Change
date: 2025-05-07
---

I am increasingly disappointed with the politicization of Artificial Intelligence (AI)[^1] by the public. Like all products of science, AI is a tool. Tools do not have moral leanings or biases, it is their application in the real world that is tied up with morality. That is to say, ethics are imbued in a tool once a human picks it up and starts using it. With that in mind, AI does have many applications and effects on the real world and increasingly so, some good and some bad. It is touching nearly all aspects of the economy, can make life or death decisions, decides who we interact with, and has a role to play in the warming climate. 

With many of these areas of impact, it is difficult to measure the effect that AI has because some of these concepts are fuzzy. This is not the case with anthropogenic climate change. We know that warming climates are directly linked to the emission of greenhouse gas (GHG) emissions and we have many good ways of measuring emissions; however, calculating the carbon footprint of anything is difficult and sometimes imprecise. In general, I will assume the worst case scenario when making emissions calculations, but there is this inherent asterisk to every statement herein.

## Energy

The primary complaint with AI is about energy consumption, particularly with generative AI. There are many forms of neural networks, all of which have varying energy demands, but I would like to focus on generative AI as it has the most intense energy demand and receives the most criticism. We can reasonably assume other forms of machine learning will use less than the figures we find here as they are generally less complex, easier to train, and deployed on a much smaller scale.

We can divide the lifecycle of neural networks into two separate phases: training and inference. Training is much more computationally heavy, though it only happens once[^2] per model. Inference, by comparison, is computationally cheap but can happen millions if not billions of times.

### Training

The companies producing Large Language Models (LLMs) are fairly quiet about what goes on behind the scenes, though we do have data from a few models that give us some insights and allow us to extrapolate out. In particular we can look at [Llama 3.3 405B](https://huggingface.co/meta-llama/Llama-3.1-405B) from Meta. This is a typically sized model that these large companies use and because it is open source, we can see how long it trained for and what equipment was used to get an estimate of the total greenhouse-gas (GHG) emissions.

![Meta's own inventory of the GHG emissions of Llama 3.1](/blog/ai_climate_change/llama_ghg_inventory.jpg)

Meta purchases carbon offsets, and so their ‘market based GHG’ is 0, but carbon offsets have a problematic past (and present) so we will ignore this figure in its entirety. Meta claims that the location where they trained the model emitted about 8.9 kilotons of CO2e, probably because some mix of their energy usage comes from green energy. This is another figure that we will ignore. Let’s assume they are using 100% natural gas. If that was the case, each gigawatt-hour (GWh) of natural gas produces about [499 tons of CO2e](https://world-nuclear.org/images/articles/comparison_of_lifecycle1.pdf). My own calculation of total energy emissions is as follows:

$$
(30.84 * 10^6 \text{h})700 \text{W} = 21.59 \text{GWh}
$$

Training this neural network consumed about 21.59 GWh of energy.

$$
21.59 \text{GWh} * 499 \text{tons/GWh} = 10773 \text{tons}
$$

We get 10,773 tons of CO2e to train this model. This sounds like a lot, but in the grand scheme of our emissions it is pitifully small. The average American [emits 16 tons](https://www.perchenergy.com/blog/environment/what-is-average-carbon-footprint-person-usa) per year and [lives about 77.5 years](https://www.cdc.gov/nchs/fastats/life-expectancy.htm) for a lifetime emission of 1240.0 tons per American. This implies that the carbon cost of Llama 3.1 405B is 8.68 Americans. Let’s assume that there is about 100 models of this size out in the world.[^3] This means that the global cost of training all LLMs in the world is about 868 Americans or less. 

The town that I come from in rural America currently has a population hovering around 6,000. Imagine if this town was the focus of international outcry because our ‘overpopulated’ limit hamlet is eating up the world’s resources and driving us towards a warmer climate. This is ludicrous proposition. And yet, my cow-town birthplace is roughly 7 times more responsible for global warming than all of the world’s LLMs combined.[^4]

### Inference

For inference, I will heavily rely on a [paper](https://arxiv.org/pdf/2310.03003) published by MIT, NYU, and Northeastern University. Please take the time to read the paper for more details. The main purpose of this paper is to determine the amount of energy / response that LLMs draw.

![Inference energy per response for LLaMa 65B](/blog/ai_climate_change/ai_inference_energy.png)

We will take the biggest number from this chart and round it up to 2000 Joules per response.

One variable they are controlling for here merits explanation: batch size. This number indicates how many different response we are handling at once and the red bar - the largest - is handling 512 responses at once. This means that we are not consuming 2000 Joules per individual response, but rather 2000 Joules per 512 responses. This means the actual response unit cost is 3.9 Joules. A singular blueberry is 4184 Joules.[^5]

Estimating the scale of inference is quite difficult, but [we do know some numbers](https://www.reuters.com/technology/artificial-intelligence/openais-weekly-active-users-surpass-400-million-2025-02-20/) such as daily / weekly / monthly active users for services such as ChatGPT. A common number thrown around is about 1 billion responses per day. [OpenAI owns about 50%](https://firstpagesage.com/reports/top-generative-ai-chatbots/) of the market for LLM usage, so we can double this to get 2 billion global queries per day. Using our energy / response ratio that we gathered from the paper, we arrive at 7.89 gigajoules per day, which is 2.19 megawatt-hours per day.

Again, we will assume that 100% natural gas is used for inference. This assumption yields 1.09 tCO2e per day. Scaling to a year gets us to 397.85 tCO2e per year. This is the equivalent to 24.87 Americans per year (not their lifetime emissions, but their per year emissions). Once again, this is a service used billions of times per day by hundreds of millions of people around the world. The cost is 25 Americans worth of emissions. This seems like a worthy tradeoff.

## Blame deflection

There is this notion of companies shifting blame for the climate crisis towards the consumer. They have manufactured the idea that each person needs to be personally responsible for their carbon footprint and that the onus is on them to reduce this footprint as much as possible. This is propaganda. The obligation is and always has been on large corporations to put in the work to make this change as they are the ones responsible for the lion’s share of damage done to the earth.

There are, however, levels to this. Suppose you walk into your local cafe and spot that they are selling Coca-Cola in plastic bottles. They must sell hundreds of those a day. They surely have much more responsibility for plastic waste than you do as an individual consumer. You go to Starbucks next, same situation, but at a different scale. Blame is surely more justified, since Starbucks must sell millions of bottles a day. However I think this blame is misplaced. I’d argue the responsiblity is not on you, the local cafe, nor Starbucks.[^6] It’s on Coca-Cola to stop packaging to the tune of [2 billion drinks per day](https://www.coca-cola.com/ng/en/about-us/faq/how-many-drinks-does-the-coca-cola-company-sell-worldwide-each-d#:~:text=How%20many%20drinks%20does%20The%20Coca%E2%80%91Cola%20Company%20sell%20worldwide,than%20200%20countries%20each%20day.) in wasteful, non-reusable packaging. The scale is much different at the source. Personally, I would rather cut the snake at the head.

Similarly, the same logic can be applied to AI companies and the climate crisis (though AI companies have their owns sins to contend that are not related to climate). Like it or not, we need energy to be a functioning and productive society. Energy production and usage has a directly [inverse correlation with poverty rates](https://www.mdpi.com/2071-1050/16/11/4468). Some scientists even directly measure the progress of humanity by how much [energy we produce](https://en.wikipedia.org/wiki/Kardashev_scale). Using energy is not unethical, but unnecessarily emitting GHGs is.

There is an additional fact, looming in the background, which adds a dimension of absurdity to the AI energy use objection: we can, in 2025, generate near infinite amounts of clean, cheap, easily accessible energy to the entire world. This has been true for several decades. When you account for the negative externalities generated by fossil fuel usage for energy production, green power plants actually end up being cheaper than carbon based energy. Why are we not on green energy then? Political willpower (more specifically, plutocratic institutions).

I find the distinction between technical and political hurdles to be an important one. With technical challenges, the ceiling is immutable. Physics and math inform hard and fast rules for what we can and cannot do. Political challenges are much easier by comparison, the only ceiling being the vision of the future that we can imagine for ourselves. The fact that green energy faces no technical challenges[^7] and only political challenges is a hopeful thought. A vast reduction in carbon emissions, perhaps even a reduction that will be sustainable for the foreseeable future, only requires us to wish it into existence.

It would be a much more fruitful endeavor to redirect our outrage at AI energy demands towards the ways that we generate electricity in the first place. Here, we once again see that the scale is completely different at the source. We were discussing mere gigawatts-hours earlier, but the scale of [worldwide power production](https://en.wikipedia.org/wiki/World_energy_supply_and_consumption) is in the petawatt-hour range (one million times larger).

## Good News

We have been talking about LLMs this whole time and yet AI is so much more than that and has many more applications beyond being a chatbot. To limit the field to LLMs is reductive and boring. As aforementioned, AI touches almost every aspect of modern society and there is a wealth of examples to draw from to demonstrate that AI can be used to improve the environmental crisis we are facing.

### Energy (again)

* Google used machine learning to [reduce data center energy usage](https://deepmind.google/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-by-40/) by 40%. Data centers are complex places and it has many systems that interact in convoluted ways. Humans have a few levers that we can pull to make them run more efficiently, but the amount of variables (and the ways they interact) is too complex for us to reason about. Machine learning handles this for us automatically.
* Buildings account for 40% of global emissions. [MapMortar](https://www.mapmortar.io/about) uses AI to identify and plan for carbon reduction strategies in existing buildings. This helps people start decarbonizing their buildings quickly, as opposed to waiting months for human created evaluations and reports
.
* AI can [predict equipment failures](https://www.verdigris.co/) in solar panels before they happen and therefore increase the operational time of solar panels. Solar panels are not completely GHG free, so expanding the operational capacity of existing panels decreases the GHG produced per GWh.

### Agriculture
Agriculture accounts for [10%](https://www.epa.gov/ghgemissions/sources-greenhouse-gas-emissions) of global emissions.

* Collecting data about soil, moisture content, and temperature can help optimize planting dates, harvest dates, when to water, and when to fertilize. This simultaneously [increases crop yields](https://news.climate.columbia.edu/2018/06/05/artificial-intelligence-climate-environment/) by as much as 30% and decreases water, land, and fertilizer usage.
* [John Deere](https://www.deere.com/en-us/products-and-solutions/technology-solutions/precision-agriculture-technology-and-solutions/section-control-variable-rate-application-mduznfbd), while otherwise an [awful company](https://en.wikipedia.org/wiki/John_Deere#Legal_issues_concerning_repair_policies), has technology which leverages computer vision to precisely measure (down to a square centimeter) where pesticides have already been sprayed on crops and can control where you spray pesticides based on this data. This reduces pesticide use in general but also ensures that crops do not receive too much pesticides, which increases yields and decreases land use.
* Combining [satellite data with computer vision](https://www.space-intelligence.com/) has mapped over 1.5 billion hectacres of forest, an effort that would be extremely laborious for humans to complete. This data directly contributes to preventing deforestation. [In some cases](https://www.reuters.com/world/americas/brazil-drones-take-flight-rio-high-tech-reforestation-push-2024-01-12/) it even helps with reforestation. Protecting and revitalizing forests is a good carbon sequestration technique.[^8]

### Protecting peoples vulnerable to climate change

Protecting vulnerable populations does not have a direct impact on GHG, but the reason why we care about GHG emissions and a warmer climate in the first place is because of how it will impact the Earth’s organisms (not just humans). GHG mitigation should be the first priority, but protecting those in the line of fire is also extremely important.

AI is generally pretty good at predicting the future, which is useful when weather patterns are becoming increasingly volatile due to a warmer climate. There are several projects which help predict floods / drought / natural disaster events and help notify those effected as soon as possible. The [UN](https://news.un.org/en/story/2023/11/1143187) has a good overview of this general concept and highlights some of the projects underway that are helping vulnerable populations.

### Pollution and waste

* Some waste emits methane, which accounts for about 3.3% of global emissions. Refuse can be [analyzed with computer vision](https://www.greyparrot.ai/) before being sent to the landfill and pick out the items worth recovering, items that can be recycled, or items which would emit methane as they sit. This system is very cheap to set up, very simple, and can impact multiple environmental issues at once: GHG emissions, landfill use, and recycling.
* [The Ocean Cleanup](https://theoceancleanup.com/updates/using-artificial-intelligence-to-monitor-plastic-density-in-the-ocean/) is using AI to identify areas where there is the most plastic waste in the ocean. This information directly guides where they can go to have the most impact.

## Final thoughts

I’ll admit to a bias. The idea of teaching machines to learn, even though it’s something I practice on a regular basis, still feels like complete magic to me. I am entranced by this tool we have available to us. It fills me with child-like wonder to see it in action, to see its deployment in the real world, and to see the rapid progress the field is making.

This mindset also leads to my dismay as I see the politicization of this tool unfold. This is just one instantiation of a larger trend of tribalism and a lack of nuace and grace with our interlocutors that plagues the 21st century. Tribalism is something innate to us - much older than the written word - but I think it is assisted and amplified by these very same tools I discuss here today; recommendation algorithms in particular are the most guilty. AI is not all good, nor is it all bad. It is a tool, and it is the application of tools by humans that determines the morality.

However, we are discussing the matter of climate change, which is rather measurable and quantifiable. The narrative that AI is a driver of the climate crisis is not supported by the data. Instead, we need to recognize this tool as an essential part of the solution, provided we pair its growth with a decisive shift toward clean energy. Redirecting our collective attention and political will toward decarbonizing the grid will yield far greater benefits for the planet than scapegoating emerging technologies, especially technologies which can enable climate risk mitigation.

[^1]: I have issues with the term AI. It is a term so broad that it carries little to no meaning. To me, AI encompasses algorithms such as naive bayes and linear regressions, but in the past few years the term has abruptly shrunk to just mean transformer-based generative AI. The definition I am using here is somewhere in the middle: what I mean when I say AI is specifically deep neural networks. I may use the phrase ‘machine learning’ or ‘neural networks’ interchangeably with ‘AI.’
[^2]: Training often takes a few attempts. Engineers rarely get things right on the first go so sometimes it take a few to several attempts before the model is right. However with LLMs and other forms of generative AI, training takes so long (and is so costly) that companies cannot afford to do multiple training runs.
[^3]: This is probably the largest overestimate in the whole calculation. The number of organizations that can afford to train a model of this size is extremely small.
[^4]: In general, [rural locations emit more](https://climateadaptationplatform.com/who-has-the-bigger-carbon-footprint-rural-or-urban-dwellers/) GHGs per person as well so the ratio is likely higher than my calculation.
[^5]: Assuming a blueberry is one calorie.
[^6]: Both Starbucks and your local cafe have their own complicity in the climate crisis is ways that they are much more directly responsible for. They should tend to these issues directly and is is absolutely justified to blame them for concerns that they are the progenitor of. 
[^7]: There are engineering challenges related to implementing a 100% green energy future and work to be done in this arena. I only mean that the technology exists to make it happen and if everyone was on the same page, we would not face limitations with respect to physics.
[^8]: Carbon sequestration is only a valid measure for combatting climate change in the short term.
