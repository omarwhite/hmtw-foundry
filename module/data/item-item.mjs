import HisMajestyTheWormItemBase from "./base-item.mjs";
import { gearLocationOptions } from "../helpers/constants.mjs";

export default class HisMajestyTheWormItem extends HisMajestyTheWormItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.location = new fields.StringField({ required: true, blank: false, choices: gearLocationOptions, initial: gearLocationOptions[gearLocationOptions.length - 1] });
    schema.oversized = new fields.BooleanField({ initial: false });
    schema.quantity = new fields.NumberField({ integer: true, initial: 1, min: 0 });
    
    schema.slots = new fields.NumberField({ ...requiredInteger, initial: 1, min: 1, max: 3 });
    schema.notches = new fields.NumberField({ integer: true, initial: 0, min: 0 });
    schema.maxnotches = new fields.NumberField({ integer: true, initial: 1, min: 0 });

    return schema;
  }

}