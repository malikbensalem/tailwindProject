const GNEWS_API_KEY = "d3140da551cbe0d8ce2ce05eafba316c";
const GNEWS_BASE_URL = "https://gnews.io/api/v4";

function formatDate(date) {
  return new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(date));
}

function articleCard(article, index) {
  const image = article.image
    ? `<img src="${article.image}" alt="" class="w-full h-48 object-cover" loading="lazy" />`
    : "";

  return `
    <article class="border border-gray-300 bg-white overflow-hidden">
      ${image}
      <div class="p-5">
        <p class="text-xs uppercase text-gray-500">${String(index + 1).padStart(3, "0")} / ${formatDate(article.publishedAt)}</p>
        <h3 class="font-bold uppercase text-xl mt-3 leading-tight">${article.title}</h3>
        <p class="text-sm text-gray-600 mt-3">${article.description || "Read the full story from the original publisher."}</p>
        <div class="flex items-center justify-between gap-4 mt-6 text-xs uppercase">
          <span class="text-gray-500">${article.source.name}</span>
          <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="font-bold underline shrink-0">Read story</a>
        </div>
      </div>
    </article>`;
}

async function loadNews() {
  const container = document.querySelector("[data-news-list]");
  const status = document.querySelector("[data-news-status]");
  if (!container || !status) return;

  const isArchive = document.body.dataset.page === "archive";
  const endpoint = isArchive
    ? `${GNEWS_BASE_URL}/search?q=technology&lang=en&country=us&max=10&apikey=${GNEWS_API_KEY}`
    : `${GNEWS_BASE_URL}/top-headlines?category=technology&lang=en&country=us&max=6&apikey=${GNEWS_API_KEY}`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error(`GNews request failed: ${response.status}`);

    const data = await response.json();
    if (!data.articles?.length) throw new Error("No articles were returned.");

    container.innerHTML = data.articles.map(articleCard).join("");
    status.textContent = `Updated ${new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" }).format(new Date())}`;
  } catch (error) {
    status.textContent = "News is unavailable right now. Please try again later.";
    container.innerHTML = `<p class="col-span-full border border-gray-300 p-6 text-gray-600">We could not load the latest stories.</p>`;
    console.error(error);
  }
}

loadNews();
