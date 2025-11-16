export const updatesData = [
    {
        date: '9 октября 2025 г.',
        update: 'Dota 2 Update - 10/09/2025',
        text: 'Since the 7.39e gameplay patch, we\'ve addressed the following issues:',
        items: [
            {
                li: 'Items on trade cooldown can no longer be listed on the Steam Market',
                sub: [
                    'Removed separate "Market Cooldown" timer from item tooltips as it is no longer relevant'
                ]
            },
            { li: 'Fixed people being able to find the server id of non-friends playing matches' },
            { li: 'Fixed relic progress displaying for the enemy team' },
            { li: 'Fixed server crash involving Helm of the Dominator' },
            { li: 'Fixed various interactions with ethereal state and debuff immunity' },
            { li: 'Fixed an issue where the number of charges for an ability could be displayed as "..."' },
            { li: 'Fixed Kez base agility being unintentionally decreased' },
            { li: 'Fixed Kez\'s Falcon Rush removing Parry' },
            { li: 'Fixed various issues for Kez\'s Aghanim\'s Scepter' },
            {
                li: 'Ability Draft Fixes',
                sub: [
                    'Shadow Demon: Shadow Servant no longer spawns illusions from clones created with Wukong\'s Command',
                    'Io: Spirits Aghanim\'s Scepter no longer passively creates spirits around clones created with Wukong\'s Command',
                ],
            },
            {
                li: 'Fixed a number of visual issues with the following Collector\'s Cache Vote sets',
                sub: [
                    'Pudge\'s "Pudgette"',
                    'Arc Warden\'s "Splinter of the Primordial Origin"',
                    'Centaur Warrunner\'s "Knight of the Lilies"',
                ],
            },
        ]
    },

    {
        date: '3 октября 2025 г.\n',
        update: '7.39e Gameplay Patch\n',
        text: 'Patch 7.39e is out now and you can check out the patch notes here.\n',
    },

    {
        date: '29 августа 2025 г.\n',
        update: 'Dota 2 Update - 8/28/2025\n',
        text: 'We have added a Team Supporter\'s Club bundle for Yakutou Brothers, available for purchase now. As a reminder, 50% of all sales of Team, Talent, and Community bundles go to the contributor and 30% go to the prize pool of The International.\n',

        text2: 'Additionally, over the last few days we have fixed the following issues:',
        li: [
            'Fixed buying Team Bundles without being able to participate in Fantasy & Predictions not granting the user sticker capsules',
            'Fixed a couple spots in both Roshan pits where heroes could hide without being seen by others in the pit',
            'Fixed client not showing correct armor reduction amount when reflecting Nasal Goo from a Bristleback with the Snot Rocket facet',
            'Fixed Gyrocopter\'s Sidegunner attacks being blocked by an allied Mars\' Arena of Blood',
            'Fixed Invoker\'s Ice Floe not slowing enemies if they had previously been affected by Invoker\'s Ghost Walk with the shard upgrade',
            ]

    },

    {
        date: '23 августа 2025 г.',
        update: 'Dota 2 Update - 08/22/2025',
        text: "Over the last few days we've addressed the following issues:",
        items: [
            { li: 'Fixed emoticons from previous fan content bundles that were supposed to be permanent being unavailable' },
            { li: 'Fixed basic talent stickers all looking like a specific player sticker from 2022' },
            { li: 'Fixed accounts ineligible to participate in The International Predictions & Fantasy being able to circumvent the rules' },
            { li: 'Fixed one prediction being missing for Road to the International: Playoffs on certain resolutions' },
            { li: 'Fixed rare client crash when viewing your fantasy roster' },
            { li: 'Fixed common client crash when viewing anything on a mac' },
            { li: 'Fixed the Tyrian Regalia item "Tyrian Bloodfeather Feast" incorrectly showing as owned if the player had the Queen of Pain Arcana' },
            { li: 'Fixed sales of Talent Sticker Bundles not contributing to the prize pool' },
            { li: 'Fixed bots in locally hosted matches not purchasing any items' },
            { li: 'Fixed default Pudge bot never casting Meat Hook' },
            { li: "Fixed Arc Warden's Tempest Double being able to summon a Tempest Double by capturing an experience shrine on the double, gaining a level, and then skilling Tempest Double" },
            { li: "Fixed Meepo's Poof ocassionally inadvertently getting into the wrong alt-cast state" },
            { li: "Fixed Nature Prophet's Teleport and Io's Relocate using the wrong sounds when the teleport finishes" },
            { li: "Fixed Silencer's Last Word not triggering Spell Absorbtion, Phylactery or Khanda" },
            { li: "Fixed Troll Warlord's Fervor incorrectly granting bonus attack speed and gaining stacks when Troll Warlord is broken" },
            { li: "Fixed Troll Warlord's Berserker's Rage incorrectly granting bonus stats when Troll Warlord is broken" },
            { li: "Fixed rare server crash with Witch Doctor's Death Ward" },
            { li: "Fixed rare crash with Marci's Dispose" },
        ]
    },

    {
        date: '8 августа 2025 г.',
        update: 'Dota 2 Update - 08/08/2025',
        text: "Over the last few days we've addressed the following issues:",
        items: [
            { li: 'Ctrl+Alt pinging enemy abilities or items will now display that the ability or item could be on cooldown' },
            { li: 'Fixed an issue with quickbuy where stackable items kept being bought repeatedly' },
            { li: 'Fixed an issue where Quartero rewards could not be claimed' },
            { li: 'Fixed green range indicator briefly appearing with quickcast on press' },
            { li: 'Fixed Mjollnir description stating wrong Chain Lightning illusion damage' },
            { li: 'Fixed Alchemist losing bonus damage from granting scepter when dying' },
            { li: "Fixed Bristleback's Seeing Red facet causing enemies in vision to disappear when the buff expired" },
            { li: "Fixed Dark Willow's Cursed Crown and Silencer's Last Word sometimes expiring without triggering" },
            { li: 'Fixed allies being able to target Dark Willow in Shadow Realm' },
            { li: 'Fixed Ember Spirit not getting remnant charges from allied hero kills with shard' },
            { li: "Fixed Invoker's twister interval not matching twister radius" },
            { li: "Fixed Invoker's Tornado cast range differing from travel range" },
            { li: 'Fixed crash with Kez Katana bleed' },
            { li: 'Fixed Kazurai Katana overhead damage numbers not representing spell amp' },
            { li: 'Fixed Kazurai Katana impale debuff immune interactions' },
            { li: 'Fixed Kazurai Katana shard lifesteal applying to triggered attacks' },
            { li: 'Fixed Grappling Claw attacking targets outside melee buffer on landing' },
            { li: 'Fixed Grappling Claw escaping Kinetic Field' },
            { li: 'Fixed Raptor Dance giving inconsistent invulnerability with cast speed bonuses' },
            { li: 'Fixed Falcon Rush gaining rush speed incorrectly' },
            { li: 'Fixed Shodo Sai Cancel granting magic stick charges' },
            { li: 'Fixed interaction causing Kez to Echo Slash into the 3rd dimension' },
            { li: "Fixed Lycan's Wolf Bite casting on allies with disabled help" },
            { li: "Fixed Morphling retaining Necrophos Sadist stacks after morph ends" },
            { li: 'Fixed Pugna unable to use Magic Stick/Wand while channeling' },
            { li: 'Fixed Queen of Pain Bondage visuals pointing at invisible enemies' },
            { li: 'Fixed crash in Shadow Demon Demonic Purge' },
            { li: 'Fixed Snapfire unable to target ethereal units' },
            { li: 'Fixed Tusk shards disappearing for all players when snowballing' },
            { li: "Fixed Weaver's Hivemind XP bug" },
            { li: "Fixed Zeus +1 Heavenly Jump talent giving +2 attack speed slow" },
            { li: 'Fixed workshop tools failing to load due to XML/CSS' },
        ]
    },

    {
        date: '25 июня 2025 г.',
        update: '7.39c Gameplay Patch',
        text: 'Patch 7.39c is out now and you can check out the patch notes here.',
        text2: "In addition, over the last few days we've addressed the following issues:",
        items: [
            { li: 'Allow items locked for combining to be delivered by courier' },
            { li: "Fixed Abaddon's Mist Coil not dealing self damage on enemies with Quickening facet" },
            { li: 'Fixed several armory style-change issues' },
            { li: 'Added Rubick quickcast setting for stolen spells' },
            { li: "Fixed Ghost Walk duration refreshing when dropping/picking Aghanim's" },
            { li: 'Fixed Elder Titan repeatedly getting buffs with alt-cast stomp' },
            { li: "Fixed Lich L25 Frost Shield regen working on pip-based units" },
            { li: 'Fixed Exorcism spirits ignoring cosmetic' },
            { li: 'Fixed courier drag/drop issues' },
            { li: 'Fixed courier keeping orders after death' },
            { li: "Fixed Queen of Pain Sonic Wave infinite damage scenarios" },
            { li: 'Fixed units stuck at 1hp due to infinite healing interactions' },
            { li: "Fixed 'Owned By:' tag showing incorrectly in fog" },
            { li: "Fixed Undying L20 talent not spawning Tombstone" },
            { li: 'Fixed double decapture of watcher enabling activation' },
        ]
    },

    {
        date: '30 мая 2025 г.',
        update: '7.39b Gameplay Patch',
        text: 'Patch 7.39b is out now and you can check out the patch notes here.',
        text2: "In addition, over the last few days we've addressed the following issues:",
        items: [
            { li: 'Fixed various client/server crashes' },
            { li: 'Fixed crashes in new Settings menu' },
            { li: 'Fixed moving whole items in quickbuy' },
            { li: 'Fixed Quickcast Dropdown not showing in Direct Cast Bindings' },
            { li: 'Fixed non-hero units being able to buy via quickbuy' },
            { li: 'Fixed courier grabbing stash at secret shop incorrectly' },
            { li: 'Fixed Alt-bound keys triggering unintended actions' },
            { li: 'Fixed Network Quality not applying' },
            { li: 'Readded missing UI settings' },
            { li: 'Added custom-game setting disabling per-unit hotkeys' },
            { li: 'Fixed TP Scroll and Neutral bind issues' },
            { li: 'Fixed courier Transfer Items grabbing from stash while in shop range' },
            { li: 'Fixed courier ignoring queued orders' },
            { li: 'Fixed client crash when dragging item into Guide edit mode' },
            { li: 'Fixed Fullscreen Brightness reversed' },
            { li: 'Fixed MMR recalibration button' },
            { li: 'Fixed heroes stuck in death transition state' },
            { li: 'Fixed keybinder blocking inputs' },
            { li: 'Fixed courier stash issues when leaving fountain' },
            { li: 'Renamed and reworked Hold/Stop cancel behaviors' },
            { li: 'Courier continues executing last order in auto-deliver' },
            { li: 'Courier HUD improved' },
            { li: 'Fixed custom game crash with >7 players' },
            { li: 'Fixed Show Team Items toggle not persisting' },
            { li: 'Fixed dozens of ability and hero issues (Centaur, Disruptor, Dawnbreaker, etc.)' },
            { li: 'Fixed Roshan Roar not playing' },
            { li: 'Fixed Helm of the Undying bugs' },
            { li: 'Fixed Bloodrage interactions with Linken’s and silence rules' },
            { li: 'Fixed Disruptor, Elder Titan, Hoodwink, Ogre Magi, Invoker, IO, many others' },
            { li: 'Fixed Kez ability issues: Flutter Katana, Raven’s Veil, Grappling Claw, etc.' },
            { li: 'Fixed Lone Druid Spirit Bear quickbuy issues' },
            { li: 'Fixed Magnus Reverse Polarity stun animations' },
            { li: 'Fixed Monkey King Changing of the Guard issues' },
            { li: 'Fixed Muerta Quick Draw/Gunslinger issues' },
            { li: 'Fixed dozens more hero-specific bugs' },
        ]
    },

    {
        date: '28 марта 2025 г.',
        update: '7.38c Gameplay Patch',
        text: 'Patch 7.38c is out now and you can check out the patch notes here.',
        text2: "In addition, over the last few days we've addressed the following issues:",
        items: [
            { li: 'Added missing 7.38 patch note: Roshan no longer drops Aghanim’s Blessing' },
            { li: 'Fixed Tormentor spawning on player hero in Demo Mode' },
            { li: 'Fixed -createhero spawning without facet' },
            { li: 'Fixed combat log showing enemy channeling without vision' },
            { li: 'Fixed heroes stuck if Roshan grab interrupted' },
            { li: 'Fixed Haste rune duration not upgrading' },
            { li: 'Fixed infinite TP scroll generation exploit' },
            { li: 'Fixed smoke detection scenarios' },
            { li: 'Fixed numerous hero bugs: Alchemist, Bristleback, Dazzle, Clinkz, Doom, Hoodwink, Kez, Kunkka, Lycan, Magnus, Marci, Medusa, Nyx, Muerta, Naga, Pangolier, Puck, Razor, Riki, Slardar, TA, Windranger, Winter Wyvern, WD, Venge, Zeus' },
            { li: 'Ability Draft fixes (Pangolier, Kez)' },
        ]
    },

    {
        date: '20 марта 2025 г.',
        update: 'Dota 2 Update - 3/19/2025',
        text: 'Immortal Draft Changes:',
        items: [
            { li: 'Immortal Draft now applies above 8500 MMR' },
            { li: 'Immortal Draft games private, restricted replays' },
            { li: 'Players 8500+ must register official name' },
            { li: '8500+ cannot queue ranked as party' },
            { li: 'MMR gain/loss recalibrated for draft outcomes' },
        ]
    },

    {
        date: '4 марта 2025 г.',
        update: '7.38b Gameplay Patch',
        text: 'Patch 7.38b is out now, along with a new Dota Plus season.',
        text2: "Over the last few days we've addressed the following issues:",
        items: [
            { li: 'Fixed Clinkz Burning Army auto-casting Tar Bomb' },
            { li: 'Fixed TA Hidden Reach effects visible to enemies' },
            { li: 'Fixed Sven +10% Vanquisher talent' },
            { li: 'Fixed Ability Draft loading freeze' },
            { li: 'Fixed Drow illusion Precision Aura overriding bonuses' },
            { li: 'Fixed AA Ice Blast Shatter threshold flicker' },
            { li: 'Fixed Doom Devour losing ability / aura bugs in AD' },
            { li: 'Fixed Roshan Timer broken with TA innate' },
            { li: 'Fixed Mark for Sell courier interactions' },
            { li: 'Refined Roshan Timer and Madstone alt-click messages' },
            { li: 'Fixed Drow Sidestep not triggering Silencer LW' },
            { li: 'Fixed Viper Nosedive model orientation exploit' },
            { li: 'Fixed Jakiro Liquid Fire in AD' },
            { li: 'Fixed Kaya spell lifesteal amp not working' },
        ]
    },

    {
        date: '22 февраля 2025 г.',
        update: 'Dota 2 Update - 2/21/2025',
        text: "Over the last few days we've addressed the following issues:",
        items: [
            { li: 'Fixed heroes in Ability Draft missing innate abilities' },
            { li: 'Fixed Lotus Pool timers in Turbo' },
            { li: 'Fixed minimap icons for spectators' },
            { li: 'Fixed camps spawnboxes too tall' },
            { li: 'Fixed Tormentor issues in Demo Mode' },
            { li: 'Improved Neutral Tooltip enchantment guessing' },
            { li: 'Fixed Ironwood trees Tango heal duration' },
            { li: 'Fixed Ninja Gear smoke interactions' },
            { li: 'Fixed Phylactery slow not applying' },
            { li: "Fixed Pirate's Hat death cost tooltip" },
            { li: 'Fixed Pyrrhic Cloak reflecting reflected damage' },
            { li: "Fixed Revenant's Brooch illusion damage" },
            { li: 'Fixed ability charges exceeding max in certain situations' },
            { li: 'Fixed Morphling Morph issues' },
            { li: 'Fixed Winter Wyvern Curse issues' },
            { li: "Fixed Anti-Mage Magebane not reducing mana" },
            { li: "Fixed Arc Warden Flux shard silence after dispel" },
            { li: "Fixed CM Blueheart Floe not leveling" },
            { li: 'Fixed Dazzle numerous Nothl-related bugs' },
            { li: "Fixed Dragon Knight Wyrm's Wrath numerous issues" },
            { li: 'Fixed Hoodwink L20 Sharpshooter vision path' },
            { li: 'Fixed Invoker Aghanim’s attribute leveling' },
            { li: "Fixed Io's Tether shard healing not applying" },
            { li: "Fixed Lion's Impale missing AoE bonuses" },
            { li: "Fixed Monkey King clones stealing Pirate’s Hat gold" },
            { li: "Fixed Morphling Adaptive Strike Flow facet stun" },
            { li: "Fixed Pangolier Shield Crash barrier interactions" },
            { li: 'Fixed Primal Beast uncapped Ferocity stacks' },
            { li: 'Fixed Rubick Nothl Projection stack interactions' },
            { li: "Fixed Rubick Aghanim's upgrades from stolen Shackles" },
            { li: "Fixed Puck Phase Shift being interrupted" },
            { li: "Fixed Riki Tricks of the Trade interrupted" },
            { li: "Fixed Techies Minefield Sign triggering at cast point" },
            { li: "Fixed TA Meld Hidden Reach charge time" },
            { li: "Fixed Windranger Killshot thresholds" },
            { li: 'Fixed Windranger L25 Focus Fire talent' },
        ]
    },

    {
        date: '6 декабря 2024 г.',
        update: 'Dota 2 Update - 12/5/2024',
        text: "Over the last few days we've made the following changes:",
        items: [
            { li: 'Fixed Quickcast config for wards' },
            { li: 'Fixed Razor Arcana icon' },
            { li: 'Fixed SF Presence of the Dark Lord stacks' },
            { li: 'Fixed winter terrain lighting' },
            { li: 'Fixed loading spinners' },
            { li: 'Fixed Force Staff tooltip dots' },
            { li: 'Fixed expired sprays rendering' },
            { li: 'Fixed various crashes' },
            { li: 'Fixed watcher colors' },
            { li: "Enabled Kez's Sai abilities in Ability Draft" },
            { li: 'Crownfall: Hero filters, Nest fixes, Rewards fixes, Reaper visibility' },
        ]
    },

    {
        date: '4 декабря 2024 г.',
        update: 'Dota 2 Update - 12/3/2024',
        text: 'Gameplay Update',
        items: [
            {
                li: 'Kez Changes',
                sub: [
                    'Echo Slash: removed cleave',
                    'Falcon Rush: Range 650→575',
                    'Grappling Claw: Heal 40/80/120/160 → 30/60/90/120',
                    'Grappling Claw: CD 15/12/9/6 → 16/13/10/7',
                    'Talon Toss: CD 15/12/9/6 → 16/13/10/7',
                    'Raven’s Veil: Mark no longer applies parry',
                    'New L15 talent: Raven’s Veil Mark Applies Parry Bonus',
                ]
            },
            { li: 'HUD stance indicator improved' },
            { li: 'Many Kez ability bugfixes' },
        ]
    },

    {
        date: '20 ноября 2024 г.',
        update: '7.37e Gameplay Patch',
        text: 'Patch 7.37e is out now and you can check out the patchnotes here.',
    },

    {
        date: '13 ноября 2024 г.',
        update: 'Dota 2 Update - 11/12/2024',
        text: 'Kez balance adjustments and many fixes.',
        items: [
            { li: 'Kazurai Katana DPS nerf' },
            { li: 'Falcon Rush base attack rate increased' },
            { li: 'Raptor Dance & Raven’s Veil cooldowns increased' },
            { li: 'Echo Slash evasion fixes, courier kills fix' },
            { li: 'Many bugfixes for Crownfall Act IV, Ability Draft, cosmetic rewards, minigames, and Kez debut animation' },
        ]
    },



]


