import createMeleeWeapons from "./weapons/melee";
import createMissileWeapons from "./weapons/missile";
import createCharacterClasses from "./characterModifiers/classes";
import createAttributeModifiers from "./characterModifiers/attributeModifiers";
import createSocialTraits from "./characterModifiers/socialTraits";

// weapons
createMeleeWeapons();
createMissileWeapons();

// character modfiers
// TODO: finish these
// createCharacterClasses();
// createAttributeModifiers();
createSocialTraits();
