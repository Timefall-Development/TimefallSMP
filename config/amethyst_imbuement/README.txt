###############################
# README - Amethyst Imbuement #
###############################

Config Changelog:
1.18.1-13/1.18.2-14: Added imbuingTableReplaceEnchantingTable to the Altars Config. Config updated to v1.
1.19-09/1.18.2-26: updated Altars to v2 with the addition of many (currently unused) integration options. Updated Villages to v1 with the addition of many options related to CTOV and RS. Updated Scepters to v1 and added default durabilities/damage values for the Scepter of Blades and Lethality.
1.19-11/1.18.2-28: Added the entities config file.
1.19-14/1.18.2-31: Added the trinkets config file and updated Entities to v1 with (currently unused) selections.
1.19-22/1.18.2-39: Changed the scepters config from scepters_v1 to items_v0 and added the glistering tome boolean.
1.19.3-02/1.19-25/1.18.2-42: Added a config for the chance an experience bush will grow (in Altars config v3).
1.19.3-03/1.19-26/1.18.2-43: Added configurable durability for the Totem of Amethyst.
1.19.4-01/1.19.3-06/1.19-29/1.18.2-46: Completely rebuilt the config system using fzzy config. Added many new config selections as detailed below.
1.19.4-01/1.19.3-09/1.19-32: Updated the values of some scepters and added two new material configs. Added a new trinket config for turning off burnout on totem augments.
1.19.4-01/1.19.3-12/1.19-35: Tweaked the default values for the healers gem and brutal gem in items_v4. Adds configs for the Hard Light block in the renamed Blocks_v0
1.20-01/1.19.4-01/1.19.3-13/1.19-36: Added hamster and bonestorm configs in entities_v2. Updated to items_v5 with fzzyhammer and harvest scepter info and new loot chances for unique items.
1.20.1-10: Add materials_v0 to capture configurable gear materials. Add some durability configs to items and remove the previous items_v5 durability/damage configs.
1.20.2-01/1.20.1-11: Vanilla enchantments are now configurable. Renamed 'trinkets_vX' to 'augments_vX'. Switched Bulwark to the augments config where it belongs. Added Soulwoven armor material to materials_v1. Added new entities in entities_v4. Added sky village integration configs in villages_v3

Note:  Previous versions of updated configs that have new version numbers (v1 from v0, for example) will be read and copied over to the new version, and the old version deleted.



------------
Items Config
------------
The items config json tweaks the properties of scepters and other items. You may want to tweak it if you feel like scepters have too many uses at once, or conversely if you feel that they run out of mana too quickly, or if mana items run out of durability too quickly.

 >> giveGlisteringTome: [true/false] - When true, a glistering tome is provided to players on their first join into a world.
 >> glisteringTridentDurability: Number with a default of 550, a minimum of 0, and a maximum of 5500
 >> sniperBowDurability: Number with a default of 500, a minimum of 0, and a maximum of 5000

Mana Items
Options related to items that are powered by mana, and healed by mana potions.
 >> totemOfAmethystDurability: Number with a default of 360, a minimum of 32, and a maximum of 1000
 >> imbuedJewelryDurability: Number with a default of 120, a minimum of 32, and a maximum of 1000
 >> imbuedJewelryDamagePerAmplifier: Integer between 30 and 0. Defines how much damage imbued jewelry takes on blocking a status. This number is multiplied by the amplifier of the status (+1).
 >> fullManaColor: The color of the item mana bar at full durability. Will mix with emptyManaColor as the durability decreases.
 >> emptyManaColor: The color of the item mana bar at full durability. Will mix with emptyManaColor as the durability decreases.

Scepters
Misc options related to Scepters. For direct scepter settings, see the Materials config.
readme.items.scepters_3
 >> fowlChestChance: Number with a default of 0.02, a minimum of 0.0, and a maximum of 1.0
 >> fzzyChestChance: Number with a default of 0.002, a minimum of 0.0, and a maximum of 1.0
 >> uniqueWitherChance: Float between 1 and 0. Defines the chance that a unique AI item will drop from the wither upon death. In heavily modded environments this value should probably be *very* low, as many late-game players can kill dozens of Withers easily.

Gems
Configures the targets for the ignited gems of promise.
 >> fireTarget: Integer between 1200 and 1. How many fire damage instances you need to ignite a Blazing Gem.
 >> hitTarget: Integer between 600 and 1. How many times you need to be hit by mobs to ignite a Brutal Gem.
 >> healTarget: Float between 1200.0 and 1.0. How much you need to regen in order to ignite a Healers Gem.
 >> statusesTarget: Integer between 42 and 1. How many statuses you need to gain in order ignite an Inquisitive Gem. Capped at the number of statuses in MC and AI combined.
 >> killTarget: Integer between 300 and 1. How many mobs you need to kill to ignite a Lethal Gem.
 >> spellXpTarget: Integer between 3500 and 1. How much spell XP you need to gain to ignite a Mystical Gem.

Spellcasters Focus Tiers
 >> bolsteringRange: Number with a default of 5.0, a minimum of 1.0, and a maximum of 50.0
 >> tierXp: Ordered array of size [4] with entries that meet the following criteria: Xp tier value is a cumulative XP value. Each tier needs higher xp than the last.

Spell Scrolls
 >> uses: Integer series; three values that increase A < B < C. How many spells each tier of spell scroll can cast before breaking.
 >> levels: Integer series; five values that increase A < B < C < D < E. What level the spell contained within is cast at. For example, [3] casts Flamebolt as Flamebolt III.

-----------------------
readme.header.materials
-----------------------
readme.header.materials.desc


readme.materials.armor_1

readme.materials.tools_1

readme.materials.scepters_1

-------------
Altars Config
-------------
This json defines functional tweaks for the altars, tables, and blocks in the mod.


Hard Light
Configs related to the hard light blocks added by various spells.
 >> bridgeTemporary: If set true, the hard light blocks placed via Hard Light Bridge will be temporary based on temporaryDuration
 >> createTemporary: If set true, the hard light blocks placed via Create Hard Light will be temporary based on temporaryDuration
 >> temporaryDuration: Int between 0 and 2,147,483,647, in ticks. Defines how long hard light blocks last if they are set as temporary above. If set to 0, the blocks will behave as if they are not temporary.

Experience Bush
The chance an experience bush will grow to the next stage when fed bonemeal or randomly ticked by the world.
 >> bonemealChance: Number with a default of 0.4, a minimum of 0.0, and a maximum of 1.0
 >> growChance: Number with a default of 0.15, a minimum of 0.0, and a maximum of 1.0

Disenchanting Table
readme.altars.disenchant_2
 >> levelCosts: List of integers greater than 0. The table will iterate through this list from start to finish, and then if more disenchants are allowed (list is shorter than 5 long or baseDisenchantsAllowed has been increased) the last cost in the list will be repeated.
 >> baseDisenchantsAllowed: Number with a default of 1, a minimum of 0, and a maximum of 2147483647

Imbuing Table
Settings related to the imbuing table and optional integration options with various mods.
 >> enchantingEnabled: Boolean value, enter 'true' or 'false'.
 >> replaceEnchantingTable: Boolean value, enter 'true' or 'false'.
 >> difficultyModifier: Float from 10.0 to 0.0. Multiplies the level-cost of imbuing by the value entered. A value of 0.5 will halve the imbuing level costs, 2.0 will double them, and so on. 0.0 will make imbuing cost no experience.
Easy Magic Integration
The imbuing table can mimic certain behaviors from Easy magic. Settings for that are here.
     >> matchEasyMagicBehavior: Boolean value, enter 'true' or 'false'.
     >> rerollEnabled: Boolean value, enter 'true' or 'false'.
     >> levelCost: Number with a default of 5, a minimum of 0, and a maximum of 2147483647
     >> lapisCost: Number with a default of 1, a minimum of 0, and a maximum of 2147483647
     >> showTooltip: Boolean value, enter 'true' or 'false'.
     >> singleEnchantTooltip: Boolean value, enter 'true' or 'false'.
Reroll Integration
The imbuing table can mimic certain behaviors from Reroll. Settings for that are here.
     >> matchRerollBehavior: Boolean value, enter 'true' or 'false'.
     >> levelCost: Number with a default of 1, a minimum of 0, and a maximum of 2147483647
     >> lapisCost: Number with a default of 0, a minimum of 0, and a maximum of 2147483647

Altar of Experience
Settings related to the experience that can be stored in an Altar of Experience.
 >> baseLevels: Number with a default of 35, a minimum of 0, and a maximum of 2147483647
 >> candleLevelsPer: Number with a default of 5, a minimum of 0, and a maximum of 134217727
 >> customXpMethod: [true/false]. If set to false, Minecraft's default method for adding player XP will be used. When true, a custom method that bypasses this is used; this might help avoid undesirable interactions with mods that monitor XP gain. If these interactions are desirable, set to false.

---------------
Villages Config
---------------
Settings to enable/disable various village structures, and their spawning weight.


Vanilla Villages
 >> enableDesertWorkshops: Boolean value, enter 'true' or 'false'.
 >> desertWorkshopWeight: Number with a default of 2, a minimum of 1, and a maximum of 150
 >> enablePlainsWorkshops: Boolean value, enter 'true' or 'false'.
 >> plainsWorkshopWeight: Number with a default of 3, a minimum of 1, and a maximum of 150
 >> enableSavannaWorkshops: Boolean value, enter 'true' or 'false'.
 >> savannaWorkshopWeight: Number with a default of 3, a minimum of 1, and a maximum of 150
 >> enableSnowyWorkshops: Boolean value, enter 'true' or 'false'.
 >> snowyWorkshopWeight: Number with a default of 2, a minimum of 1, and a maximum of 150
 >> enableTaigaWorkshops: Boolean value, enter 'true' or 'false'.
 >> taigaWorkshopWeight: Number with a default of 3, a minimum of 1, and a maximum of 150

CTOV (Choice Theorem's Overhauled Villages)
 >> enableCtovWorkshops: Boolean value, enter 'true' or 'false'.
 >> beachWorkshopWeight: Number with a default of 4, a minimum of 1, and a maximum of 150
 >> darkForestWorkshopWeight: Number with a default of 4, a minimum of 1, and a maximum of 150
 >> jungleWorkshopWeight: Number with a default of 4, a minimum of 1, and a maximum of 150
 >> jungleTreeWorkshopWeight: Number with a default of 4, a minimum of 1, and a maximum of 150
 >> mesaWorkshopWeight: Number with a default of 4, a minimum of 1, and a maximum of 150
 >> mesaFortifiedWorkshopWeight: Number with a default of 4, a minimum of 1, and a maximum of 150
 >> mountainWorkshopWeight: Number with a default of 4, a minimum of 1, and a maximum of 150
 >> mountainAlpineWorkshopWeight: Number with a default of 4, a minimum of 1, and a maximum of 150
 >> mushroomWorkshopWeight: Number with a default of 4, a minimum of 1, and a maximum of 150
 >> swampWorkshopWeight: Number with a default of 4, a minimum of 1, and a maximum of 150
 >> swampFortifiedWorkshopWeight: Number with a default of 4, a minimum of 1, and a maximum of 150

RS (Repurposed Structures)
 >> enableRsWorkshops: Boolean value, enter 'true' or 'false'.
 >> badlandsWorkshopWeight: Number with a default of 2, a minimum of 1, and a maximum of 150
 >> birchWorkshopWeight: Number with a default of 2, a minimum of 1, and a maximum of 150
 >> darkForestWorkshopWeight: Number with a default of 2, a minimum of 1, and a maximum of 150
 >> giantTaigaWorkshopWeight: Number with a default of 1, a minimum of 1, and a maximum of 150
 >> jungleWorkshopWeight: Number with a default of 2, a minimum of 1, and a maximum of 150
 >> mountainsWorkshopWeight: Number with a default of 2, a minimum of 1, and a maximum of 150
 >> mushroomsWorkshopWeight: Number with a default of 2, a minimum of 1, and a maximum of 150
 >> oakWorkshopWeight: Number with a default of 2, a minimum of 1, and a maximum of 150
 >> swampWorkshopWeight: Number with a default of 2, a minimum of 1, and a maximum of 150
 >> crimsonWorkshopWeight: Number with a default of 2, a minimum of 1, and a maximum of 150
 >> warpedWorkshopWeight: Number with a default of 2, a minimum of 1, and a maximum of 150

readme.villages.sky_1
 >> enableSkyWorkshops: Boolean value, enter 'true' or 'false'.
 >> skyWorkshopWeight: Number with a default of 40, a minimum of 1, and a maximum of 150

---------------
Enchants Config
---------------
Enables and Disables enchantments, and tweaks their maximum levels.

 >> disableIncreaseMaxLevels: If enabled, all tweaks to maximum levels will be ignored (default max levels will be used).
 >> enabledEnchants: Map of Amethyst Imbuement enchantments and whether they are enabled. Set an entry to false to disable. Do not remove or add entries, they will not have an effect and may reduce functionality.
 >> aiEnchantMaxLevels: Maximum levels for custom enchantments added by Amethyst Imbuement
 >> vanillaEnchantMaxLevels: Maximum level tweaks of vanilla enchantments. If there is an enchantment that isn't on this list, adding it will likely have no effect.

---------------
Trinkets Config
---------------
Enables and Disables imbued augments.

 >> enableBurnout: true or false. If changed to false, trinket augments that burn out, such as Undying, won't do that. Instead they won't function until the mana is restored above a certain point.
 >> draconicVisionRange: Integer from 16 to 1. The range of the draconic vision augment. A range of 4 will extend 4 blocks in every direction, so a cube with sides 8 blocks long centered on the player.
 >> enabledAugments: Map of Amethyst Imbuement trinket and equipment augments and whether they are enabled. Set an entry to false to disable. Do not remove or add entries, they will not have an effect and may reduce functionality.

---------------
Entities Config
---------------
Defines various base attributes of various mobs that are spawnable with AI.

 >> forcePvpOnAllSpells: [true/false]. If true, all AI spells will enter PVP mode, regardless of the specific settings in the Augment configs.

Unhallowed
 >> baseLifespan: Number with a default of 2400, a minimum of 20, and a maximum of 180000
 >> baseHealth: Number with a default of 20.0, a minimum of 1.0, and a maximum of 100.0
 >> baseDamage: Number with a default of 3.0, a minimum of 0.0, and a maximum of 20.0

Crystalline Golem
 >> spellBaseLifespan: Integer that is >= 20 ticks. This is the lifespan used when a golem is summoned via Summon Crystalline Golem
 >> spellPerLvlLifespan: Integer between 5000 and 0 ticks. The amount that is added to the golem's base lifespan for each level of Summon Crystalline Golem.
 >> guardianLifespan: Integer that is >= 20 ticks. This is the lifespan used when a golem is summoned via the Guardian augment
 >> baseHealth: Number with a default of 180.0, a minimum of 1.0, and a maximum of 1024.0
 >> baseDamage: Number with a default of 20.0, a minimum of 0.0, and a maximum of 1000.0

Hamsters
 >> baseLifespan: Integer between 180000 and -1. Defines the lifespan in ticks of a summoned hamster. If set to -1, the hamster will have infinite life.
 >> baseHealth: Number with a default of 8.0, a minimum of 1.0, and a maximum of 40.0
 >> baseSummonDamage: Float between 10 and 0. Defines the damage hamsters summoned with Summon Hamster deal. For hamsters summoned via Hamptertime, change baseHamptertimeDamage.
 >> baseHamptertimeDamage: Number with a default of 2.0, a minimum of 0.0, and a maximum of 10.0
 >> perLvlDamage: Number with a default of 0.1, a minimum of 0.0, and a maximum of 1.0
 >> hamptertimeBaseSpawnCount: Number with a default of 10.0, a minimum of 1.0, and a maximum of 100.0
 >> hamptertimePerLvlSpawnCount: Number with a default of 0.5, a minimum of 0.0, and a maximum of 5.0

readme.entities.bonestorm_1
 >> baseLifespan: readme.entities.bonestorm.baseLifespan
 >> perLvlLifespan: readme.entities.bonestorm.perLvlLifespan
 >> baseHealth: Number with a default of 24.0, a minimum of 1.0, and a maximum of 240.0
 >> baseDamage: Number with a default of 4.5, a minimum of 0.0, and a maximum of 10.0
 >> perLvlDamage: Number with a default of 0.25, a minimum of 0.0, and a maximum of 1.0

readme.entities.cholem_1
 >> baseLifespan: Number with a default of 3600, a minimum of 20, and a maximum of 2146483647
 >> baseHealth: Number with a default of 80.0, a minimum of 1.0, and a maximum of 800.0
 >> baseArmor: Number with a default of 4.0, a minimum of 1.0, and a maximum of 20.0
 >> baseDamage: Number with a default of 10.0, a minimum of 0.0, and a maximum of 100.0
 >> enragedDamage: Number with a default of 4.0, a minimum of 0.0, and a maximum of 40.0

readme.entities.chorse_1
 >> baseHealth: Number with a default of 80.0, a minimum of 1.0, and a maximum of 800.0
 >> baseJumpStrength: Number with a default of 0.93, a minimum of 0.0, and a maximum of 2.0
 >> baseMoveSpeed: Number with a default of 0.275, a minimum of 0.01, and a maximum of 1.0

readme.entities.sardonyx_fragment_1
 >> baseHealth: Number with a default of 60.0, a minimum of 1.0, and a maximum of 600.0
 >> baseArmor: Number with a default of 8.0, a minimum of 1.0, and a maximum of 20.0
 >> baseDamage: Number with a default of 9.0, a minimum of 0.0, and a maximum of 90.0
 >> enragedDamage: Number with a default of 6.0, a minimum of 0.0, and a maximum of 60.0

readme.entities.sardonyx_elemental_1
 >> baseHealth: Number with a default of 512.0, a minimum of 1.0, and a maximum of 1024.0
 >> baseArmor: Number with a default of 14.0, a minimum of 1.0, and a maximum of 50.0
 >> baseDamage: Number with a default of 28.0, a minimum of 0.0, and a maximum of 280.0
 >> projectileDamage: Number with a default of 20.0, a minimum of 0.0, and a maximum of 200.0
 >> fragmentsSpawned: Number with a default of 3, a minimum of 1, and a maximum of 25
 >> devastationBeamDmg: Number with a default of 350.0, a minimum of 0.0, and a maximum of 3.4028235E38
 >> spellActivationCooldown: Number with a default of 600, a minimum of 100, and a maximum of 6000
 >> amountHealedPerSecond: Number with a default of 0.2, a minimum of 0.0, and a maximum of 5.0

-----------------------
readme.header.resources
-----------------------
readme.header.resources.desc

 >> disabledResources: List of values that meet the following criteria: None
