/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/hmtw-foundry/templates/actor/parts/actor-bonds.hbs',
    'systems/hmtw-foundry/templates/actor/parts/actor-effects.hbs',
    'systems/hmtw-foundry/templates/actor/parts/actor-pack.hbs',
    'systems/hmtw-foundry/templates/actor/parts/actor-spells.hbs',
    'systems/hmtw-foundry/templates/actor/parts/actor-talents.hbs',
    // Item partials
  ]);
};
