/**
 * Creates a URL path for a given page name
 * @param {string} pageName - The name of the page (e.g., "Home", "About", "Services")
 * @returns {string} The URL path (e.g., "/home", "/about", "/services")
 */
export function createPageUrl(pageName) {
  // Handle special cases and query parameters
  if (pageName.includes("?")) {
    const [page, query] = pageName.split("?");
    const basePath =
      page.toLowerCase() === "home" ? "/home" : `/${page.toLowerCase()}`;
    return `${basePath}?${query}`;
  }

  // Convert page name to lowercase URL path
  const path = pageName.toLowerCase();

  // Handle special mappings
  const pathMappings = {
    home: "/home",
    about: "/about",
    services: "/services",
    centers: "/centers",
    contact: "/contact",
  };

  return pathMappings[path] || `/${path}`;
}
