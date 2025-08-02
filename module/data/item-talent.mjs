import HisMajestyTheWormItemBase from "./base-item.mjs";

export default class HisMajestyTheWormTalent extends HisMajestyTheWormItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();

    schema.type = new fields.StringField({ required: true, blank: true, choices: ["", "kin", "arete", "path"] });

    // Arete talents track number of conditions met
    schema.arete = new fields.SchemaField({
      conditions: new fields.NumberField({ integer: true, initial: 0, min: 0, max: 3 }),
    });

    // Path talents track amount of XP spent and whether the talent is mastered
    schema.path = new fields.SchemaField({
      xpspent: new fields.NumberField({ integer: true, initial: 0 }),
      mastered: new fields.BooleanField({ initial: false }),
    });

    schema.wounded = new fields.BooleanField({ initial: false });

    return schema;
  }
    
}