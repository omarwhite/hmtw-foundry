import HisMajestyTheWormItemBase from "./base-item.mjs";

export default class HisMajestyTheWormCompanion extends HisMajestyTheWormItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();

    // Arete talents track number of conditions met
    schema.arete = new fields.SchemaField({
      conditions: new fields.NumberField({ integer: true, initial: 0, min: 0, max: 3 }),
    });

    // Path talents track amount of XP spent and whether the talent is mastered
    schema.path = new fields.SchemaField({
      xpspent: new fields.NumberField({ integer: true, initial: 0 }),
      mastered: new fields.BooleanField({ initial: false }),
    });

    schema.staggered = new fields.BooleanField({ initial: false });
    schema.injured = new fields.BooleanField({ initial: false });
    schema.commands = new fields.NumberField({ integer: true, initial: 1, min: 1, max: 5 });

    return schema;
  }
    
}