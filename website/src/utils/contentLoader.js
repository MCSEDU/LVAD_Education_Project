// Load content from JSON files
export const loadContent = async (tier, module) => {
  const response = await fetch(`/content/modules/tier${tier}/${module}.json`);
  return response.json();
};