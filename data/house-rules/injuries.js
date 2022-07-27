const injuries = {
	"acid": [
	{
		"minRoll": 1,
		"maxRoll": 1,
		"title": "Blindness",
		"description": "Your eyes are destroyed; you gain the blinded condition. Magic such as the regenerate spell can restore your sight.",
		"extraInjuries": 0
	},
	{
		"minRoll": 2,
		"maxRoll": 2,
		"title": "Partial Blindness",
		"description": "Your eyes are damaged; you have disadvantage on Wisdom (Perception) checks that rely on sight and on ranged attack rolls. Magic such as the regenerate spell can heal the damage to your eyes. If you have already suffered partial blindness, you&apos;re blinded.",
		"extraInjuries": 0
	},
	{
		"minRoll": 3,
		"maxRoll": 3,
		"title": "Destroyed Hand",
		"description": "You can no longer hold anything with two hands, and you can hold only a single object at a time. Magic such as the regenerate spell can restore the lost appendage.",
		"extraInjuries": 0
	},
	{
		"minRoll": 4,
		"maxRoll": 4,
		"title": "Destroyed Foot or Leg",
		"description": "Your speed on foot is halved, and you must use a crutch or cane to move. You fall prone after using the Dash action. You have disadvantage on Dexterity checks made to balance. Magic such as the regenerate spell can restore the damaged appendage.",
		"extraInjuries": 0
	},
	{
		"minRoll": 5,
		"maxRoll": 7,
		"title": "Major Neuralgia",
		"description": "You are in constant pain from nerve damage. Whenever you attempt an action in combat, you must make a DC 15 Constitution saving throw. On a failed save, you lose your action and can&apos;t use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal and regenerate, cures the neuralgia, or if you spend twenty days doing nothing but resting it resolves on its own.",
		"extraInjuries": 0
	},
	{
		"minRoll": 8,
		"maxRoll": 10,
		"title": "Minor Neuralgia",
		"description": "You are in constant pain from nerve damage. Whenever you attempt an action in combat, you must make a DC 10 Constitution saving throw. On a failed save, you lose your action and can&apos;t use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal and regenerate, cures the neuralgia, or if you spend twenty days doing nothing but resting it resolves on its own.",
		"extraInjuries": 0
	},
	{
		"minRoll": 11,
		"maxRoll": 13,
		"title": "Horrible Disfigurement",
		"description": "You have acid burns to the extent that the scars can&apos;t be easily concealed. You have disadvantage on Charisma (Persuasion) checks and advantage on Charisma (Intimidation) checks. Magical healing of 6th level or higher, such as heal or regenerate, remove the acid burn scar.",
		"extraInjuries": 0
	},
	{
		"minRoll": 14,
		"maxRoll": 16,
		"title": "Blisters",
		"description": "You have severe blisters. You have disadvantage on Dexterity checks. The blisters heal if you receive magical healing. Alternatively, someone can tend to the blisters and make a DC 15 Wisdom (Medicine) check once every 24 hours. After seven successes, the blisters heal.",
		"extraInjuries": 0
	},
	{
		"minRoll": 17,
		"maxRoll": 20,
		"title": "Minor Disfigurement",
		"description": "You have acid burn scars, but they don&apos;t have any adverse effect. Magical healing of 6th level or higher, such as heal or regenerate, remove the acid burn scars.",
		"extraInjuries": 0
	},
	{
		"minRoll": 21,
		"maxRoll": 1000,
		"title": "No Injury",
		"description": "",
		"extraInjuries": 0
	}],
	"bludgeoning": [
	{
		"minRoll": 1,
		"maxRoll": 1,
		"title": "Brain Injury",
		"description": "You have suffered a brain injury. You have disadvantage on Intelligence, Wisdom, and Charisma checks, as well as Intelligence, Wisdom, and Charisma saving throws. If you fail a saving throw against bludgeoning damage, force damage, or psychic damage, you are also stunned until the end of your next turn. Magic such as the regenerate spell can restore your full brain function.",
		"extraInjuries": 0
	},
	{
		"minRoll": 2,
		"maxRoll": 2,
		"title": "Broken Leg",
		"description": "Your speed on foot is halved, and you must use a cane or crutch to move. You fall prone after using the Dash action. You have disadvantage on Dexterity checks made to balance. If your leg is splinted with a successful DC 15 Wisdom (Medicine) check, then it will heal naturally in 8 weeks. If it is not splinted before within a week, the effects remain until the leg is rebroken and splinted. Magical healing of 6th level or higher, such as heal or regenerate, mends the broken leg.",
		"extraInjuries": 0
	},
	{
		"minRoll": 3,
		"maxRoll": 3,
		"title": "Broken Arm",
		"description": "You can no longer hold anything with two hands, and you can hold only a single object at a time. If your arm is splinted with a successful DC 15 Wisdom (Medicine) check, then it will heal naturally in 8 weeks. If it is not splinted before within a week, the effects remain until the arm is rebroken and splinted. Magical healing of 6th level or higher, such as heal or regenerate, mends the broken arm.",
		"extraInjuries": 0
	},
	{
		"minRoll": 4,
		"maxRoll": 4,
		"title": "Internal Injury",
		"description": "Whenever you attempt an action in combat, you must make a DC 15 Constitution saving throw. On a failed save, you lose your action and can&apos;t use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal or regenerate, repair the injury, or if you spend ten days doing nothing but resting, it will heal naturally.",
		"extraInjuries": 0
	},
	{
		"minRoll": 5,
		"maxRoll": 7,
		"title": "Broken Ribs",
		"description": "Whenever you attempt an action in combat, you must make a DC 10 Constitution saving throw. On a failed save, you lose your action and can&apos;t use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal or regenerate, repair the injury, or if you spend ten days doing nothing but resting, it will heal naturally.",
		"extraInjuries": 0
	},
	{
		"minRoll": 8,
		"maxRoll": 10,
		"title": "Major Concussion",
		"description": "You have disadvantage on Intelligence checks, Wisdom checks, and Charisma checks, as well as Constitution saving throws to maintain concentration. Magical healing of 6th level or higher, such as heal or regenerate, cures the concussion. Alternatively, it heals on its own in four weeks.",
		"extraInjuries": 0
	},
	{
		"minRoll": 11,
		"maxRoll": 13,
		"title": "Minor Concussion",
		"description": "You have disadvantage on Intelligence checks. The concussion heals if you receive any magical healing; alternatively, it heals on its own in two weeks. If you already have a minor concussion, you suffer a major concussion.",
		"extraInjuries": 0
	},
	{
		"minRoll": 14,
		"maxRoll": 16,
		"title": "Severe Bruising",
		"description": "You suffer severe bruising over an extensive portion of your anatomy. Anytime you suffer bludgeoning or force damage, you suffer an additional point of bludgeoning or force damage. The bruising heals if you receive magical healing. Alternatively, it heals on its own in 2 weeks.",
		"extraInjuries": 0
	},
	{
		"minRoll": 17,
		"maxRoll": 20,
		"title": "Broken Nose",
		"description": "Your broken nose is painful but doesn&apos;t have any adverse effect. Any magical healing mends your nose, although it may heal crooked if it is crooked when the healing is applied.",
		"extraInjuries": 0
	},
	{
		"minRoll": 21,
		"maxRoll": 1000,
		"title": "No Injury",
		"description": "",
		"extraInjuries": 0
	}],
	"cold": [
	{
		"minRoll": 1,
		"maxRoll": 1,
		"title": "Ocular Damage",
		"description": "One of your corneas is damaged from frostbite. You have disadvantage on Wisdom (Perception) checks that rely on sight and on ranged attack rolls. Magic such as the regenerate spell can restore the damaged cornea. If you have no corneas that remain undamaged after sustaining this injury, you&apos;re blinded.",
		"extraInjuries": 0
	},
	{
		"minRoll": 2,
		"maxRoll": 2,
		"title": "Systemic Damage from Frostbite",
		"description": "You have disadvantage on Strength, Dexterity, and Constitution ability checks and Strength, Dexterity, and Constitution saving throws. Magic such as the regenerate spell cures this damage.",
		"extraInjuries": 0
	},
	{
		"minRoll": 3,
		"maxRoll": 3,
		"title": "Gangrene of the Hand",
		"description": "You can no longer hold anything with two hands, and you can hold only a single object at a time. Magic such as the regenerate spell can restore the damaged appendage.",
		"extraInjuries": 0
	},
	{
		"minRoll": 4,
		"maxRoll": 4,
		"title": "Gangrene of the Foot",
		"description": "Your speed on foot is halved, and you must use a cane or crutch to move. You fall prone after using the Dash action. You have disadvantage on Dexterity checks made to balance. Magic such as the regenerate spell can restore the damaged appendage.",
		"extraInjuries": 0
	},
	{
		"minRoll": 5,
		"maxRoll": 7,
		"title": "Major Neuralgia",
		"description": "You are in constant pain from nerve damage. Whenever you attempt an action in combat, you must make a DC 15 Constitution saving throw. On a failed save, you lose your action and can&apos;t use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal and regenerate, cures the neuralgia, or if you spend twenty days doing nothing but resting it resolves on its own.",
		"extraInjuries": 0
	},
	{
		"minRoll": 8,
		"maxRoll": 10,
		"title": "Frostbitten Foot",
		"description": "Your speed on foot is reduced by 5 feet. You must make a DC 10 Dexterity saving throw after using the Dash action. If you fail the save, you fall prone. Magical healing cures the frostbite. Alternatively, your foot can be treated with a successful DC 15 Wisdom (Medicine) check, in which case it will heal naturally in 2 weeks.",
		"extraInjuries": 0
	},
	{
		"minRoll": 11,
		"maxRoll": 13,
		"title": "Frostbitten Hand",
		"description": "Randomly determine which hand has been frostbitten. In order to grasp or manipulate an object with that hand, you must succeed at a DC 15 Dexterity check. Magical healing cures the frostbite. Alternatively, your hand can be treated with a successful DC 15 Wisdom (Medicine) check, in which case it will heal naturally in 2 weeks.",
		"extraInjuries": 0
	},
	{
		"minRoll": 14,
		"maxRoll": 16,
		"title": "Minor Neuralgia",
		"description": "Whenever you attempt an action in combat, you must make a DC 10 Constitution saving throw. On a failed save, you lose your action and can&apos;t use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal or regenerate, repair the injury, or if you spend ten days doing nothing but resting, it will heal naturally.",
		"extraInjuries": 0
	},
	{
		"minRoll": 17,
		"maxRoll": 20,
		"title": "Anosmia",
		"description": "You lose your sense of smell and taste. You automatically fail any ability checks that involve your sense of smell or taste. The condition heals if you receive any magical healing.",
		"extraInjuries": 0
	},
	{
		"minRoll": 21,
		"maxRoll": 1000,
		"title": "No Injury",
		"description": "",
		"extraInjuries": 0
	}],
	"fire": [
	{
		"minRoll": 1,
		"maxRoll": 1,
		"title": "Lose an Eye",
		"description": "You have disadvantage on Wisdom (Perception) checks that rely on sight and on ranged attack rolls. Magic such as the regenerate spell can restore the lost eye. If you have no eyes left after sustaining this injury, you&apos;re blinded.",
		"extraInjuries": 0
	},
	{
		"minRoll": 2,
		"maxRoll": 2,
		"title": "Fourth Degree Burns",
		"description": "You have disadvantage on ability checks and Strength, Dexterity, and Constitution saving throws. If you fail a saving throw against an effect that causes fire damage, you also gain the stunned condition until the end of your next turn. Magic such as the regenerate spell cures this damage. If you already have fourth degree burns, you must succeed at a DC 15 Constitution saving throw or die.",
		"extraInjuries": 0
	},
	{
		"minRoll": 3,
		"maxRoll": 3,
		"title": "Third Degree Burns",
		"description": "You have disadvantage on ability checks and Constitution saving throws. If you fail a saving throw against an effect that causes fire damage, you also gain the stunned condition until the end of your next turn. Magic such as the regenerate spell cures this damage. Alternatively, someone can tend to the burns and make a DC 15 Wisdom (Medicine) check once every week. After ten successes, the burns heal. If you already have third degree burns, you instead suffer fourth degree burns.",
		"extraInjuries": 0
	},
	{
		"minRoll": 4,
		"maxRoll": 4,
		"title": "Second Degree Burns",
		"description": "You have disadvantage on Strength, Dexterity, and Constitution checks. Magic such as the regenerate spell cures this damage. Alternatively, they will heal on their own in 4 weeks. If you already have second degree burns, you instead suffer third degree burns.",
		"extraInjuries": 0
	},
	{
		"minRoll": 5,
		"maxRoll": 7,
		"title": "Major Neuralgia",
		"description": "You are in constant pain from nerve damage. Whenever you attempt an action in combat, you must make a DC 15 Constitution saving throw. On a failed save, you lose your action and can&apos;t use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal and regenerate, cures the neuralgia, or if you spend twenty days doing nothing but resting it resolves on its own.",
		"extraInjuries": 0
	},
	{
		"minRoll": 8,
		"maxRoll": 10,
		"title": "Minor Neuralgia",
		"description": "You are in constant pain from nerve damage. Whenever you attempt an action in combat, you must make a DC 10 Constitution saving throw. On a failed save, you lose your action and can&apos;t use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal or regenerate, repair the injury, or if you spend ten days doing nothing but resting, it will heal naturally.",
		"extraInjuries": 0
	},
	{
		"minRoll": 11,
		"maxRoll": 13,
		"title": "Horrible Disfigurement",
		"description": "You have burn scars to the extent that they can&apos;t be easily concealed. You have disadvantage on Charisma (Persuasion) checks and advantage on Charisma (Intimidation) checks. Magical healing of 6th level or higher, such as heal or regenerate, removes the burn scars.",
		"extraInjuries": 0
	},
	{
		"minRoll": 14,
		"maxRoll": 16,
		"title": "Blisters",
		"description": "You have severe blisters. You have disadvantage on Dexterity checks. The blisters heal if you receive magical healing. Alternatively, someone can tend to the blisters and make a DC 15 Wisdom (Medicine) check once every 24 hours. After seven successes, the blisters heal.",
		"extraInjuries": 0
	},
	{
		"minRoll": 17,
		"maxRoll": 20,
		"title": "First Degree Burns",
		"description": "You have superficial but painful burns. Whenever you take fire damage, you take an additional 1 point of damage. Magical healing cures the burns; alternatively, they will heal on their own in 2 weeks. If you already have first degree burns, you instead suffer second degree burns.",
		"extraInjuries": 0
	},
	{
		"minRoll": 21,
		"maxRoll": 1000,
		"title": "No Injury",
		"description": "",
		"extraInjuries": 0
	}],
	"force": [
	{
		"minRoll": 1,
		"maxRoll": 1,
		"title": "Brain Injury",
		"description": "You have suffered a brain injury. Your mind exists in two planes of reality, one real and one borne of raw magic. You constantly shift between the two, seeing or hearing things that may not exist. You have disadvantage on Intelligence, Wisdom, and Charisma checks, as well as Intelligence, Wisdom, and Charisma saving throws. If you fail a saving throw against bludgeoning damage, force damage, or psychic damage, you are also stunned until the end of your next turn. Magic such as the regenerate spell can restore your full brain functions.",
		"extraInjuries": 0
	},
	{
		"minRoll": 2,
		"maxRoll": 2,
		"title": "Neuroregressive Ataxia",
		"description": "Your limbs lose their sensation to temperature, pain, vibration and touch. Your muscles feel weakened and you have difficulty holding items. You suffer disadvantage to all Strength and Dexterity ability checks and saving throws. You also experience occasional loss of control over your limbs and make sudden and short subconscious actions (such as attempting to unsheathe your weapon or write words on a nearby piece of paper, etc). Magic such as the regenerate spell can restore your coordination.",
		"extraInjuries": 0
	},
	{
		"minRoll": 3,
		"maxRoll": 3,
		"title": "Neurodegenerative Disorder",
		"description": "Your hands are jittery and coordination is impeded by frequent muscle jolts that make you grab or squeeze hard on whatever you are holding. You suffer disadvantage to all Dexterity checks to manipulate items and you must make Dexterity saving throws against breaking fragile items you are holding. Magic such as the regenerate spell can restore your coordination.",
		"extraInjuries": 0
	},
	{
		"minRoll": 4,
		"maxRoll": 4,
		"title": "Sleep Disruption",
		"description": "You suffer from severe parasomnia and you are unable to force yourself to sleep unless you have at least one level of Exhaustion. When you sleep you suffer from terrifying nightmares and sleep paralysis. You have disadvantage on Wisdom checks and Wisdom saving throws. If you fail a saving throw against bludgeoning damage, force damage, or psychic damage, you are also stunned until the end of your next turn. Magic such as the regenerate spell can cure your condition.",
		"extraInjuries": 0
	},
	{
		"minRoll": 5,
		"maxRoll": 7,
		"title": "Internal Injury",
		"description": "You suffer occasional phantom sensations of something touching an internal organ or moving inside you causing you discomfort. Whenever you attempt an action in combat, you must make a DC 15 Constitution saving throw. On a failed save, you lose your action and can&apos;t use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal or regenerate, cures the internal injury, or if you spend ten days doing nothing but resting, it heals on its own.",
		"extraInjuries": 0
	},
	{
		"minRoll": 8,
		"maxRoll": 10,
		"title": "Major Concussion",
		"description": "You have disadvantage on Intelligence checks, Wisdom checks, and Charisma checks, as well as Constitution saving throws to maintain concentration. Magical healing of 6th level or higher, such as heal or regenerate, cures the concussion. Alternatively, it heals on its own in four weeks.",
		"extraInjuries": 0
	},
	{
		"minRoll": 11,
		"maxRoll": 13,
		"title": "Minor Concussion",
		"description": "You have disadvantage on Intelligence checks. The concussion heals if you receive any magical healing; alternatively, it heals on its own in two weeks. If you already have a minor concussion, you suffer a major concussion.",
		"extraInjuries": 0
	},
	{
		"minRoll": 14,
		"maxRoll": 16,
		"title": "Severe Bruising",
		"description": "You suffer severe bruising over an extensive portion of your anatomy. Anytime you suffer bludgeoning or force damage, you suffer an additional point of bludgeoning or force damage. The bruising heals if you receive magical healing. Alternatively, it heals on its own in 2 weeks.",
		"extraInjuries": 0
	},
	{
		"minRoll": 17,
		"maxRoll": 20,
		"title": "Phantom Pain",
		"description": "Part of your body feels numb as if blood flow has stopped and feels phantom pain but doesn&apos;t have any adverse effect. Any magical healing relieves your pain, although sensation may linger until the end of your next long rest.",
		"extraInjuries": 0
	},
	{
		"minRoll": 21,
		"maxRoll": 1000,
		"title": "No Injury",
		"description": "",
		"extraInjuries": 0
	}],
	"lightning": [
	{
		"minRoll": 1,
		"maxRoll": 1,
		"title": "Brain Injury",
		"description": "You have suffered a brain injury. You have disadvantage on Intelligence, Wisdom, and Charisma checks, as well as Intelligence, Wisdom, and Charisma saving throws. If you fail a saving throw against bludgeoning damage, force damage, or psychic damage, you are also stunned until the end of your next turn. Magic such as the regenerate spell can restore your full brain function.",
		"extraInjuries": 0
	},
	{
		"minRoll": 2,
		"maxRoll": 2,
		"title": "Explosive Grounding of the Hand",
		"description": "You lose a hand. You can no longer hold anything with two hands, and you can hold only a single object at a time. Magic such as the regenerate spell can restore the lost appendage.",
		"extraInjuries": 0
	},
	{
		"minRoll": 3,
		"maxRoll": 3,
		"title": "Explosive Grounding of the Foot",
		"description": "You lose a foot. Your speed on foot is halved, and you must use a cane or crutch to move unless you have a peg leg or other prosthesis. You fall prone after using the Dash action. You have disadvantage on Dexterity checks made to balance. Magic such as the regenerate spell can restore the lost appendage.",
		"extraInjuries": 0
	},
	{
		"minRoll": 4,
		"maxRoll": 4,
		"title": "Kidney Failure",
		"description": "When you complete a long rest, you must succeed at a Constitution saving throw of DC 15 or gain the poisoned condition until you complete a long rest. Magic such as the regenerate spell can cure your kidney failure. Alternatively, someone can tend to the kidney failure and make a DC 15 Wisdom (Medicine) check once every week. After ten successes, the kidney failure is resolved.",
		"extraInjuries": 0
	},
	{
		"minRoll": 5,
		"maxRoll": 7,
		"title": "Arc Flash",
		"description": "Roll on the fire table.",
		"extraInjuries": 0
	},
	{
		"minRoll": 8,
		"maxRoll": 10,
		"title": "Cardiac Injury",
		"description": "You gain a level of exhaustion which cannot be removed by normal means. If you fail a saving throw against fear or fear effects, you gain another level of exhaustion that can be removed by normal means. Magic such as the regenerate spell can heal your cardiac damage.",
		"extraInjuries": 0
	},
	{
		"minRoll": 11,
		"maxRoll": 13,
		"title": "Skeletal Muscle Breakdown",
		"description": "You have disadvantage on Strength checks and Strength saving throws. Magic such as the regenerate spell can cure your muscle breakdown. Alternatively, it will resolve on its own in 6 weeks.",
		"extraInjuries": 0
	},
	{
		"minRoll": 14,
		"maxRoll": 16,
		"title": "Muscle Spasms",
		"description": "You have disadvantage on Dexterity checks. Magical healing cures your muscle spasms. Alternatively, they will resolve on their own in 2 weeks.",
		"extraInjuries": 0
	},
	{
		"minRoll": 17,
		"maxRoll": 20,
		"title": "Flash Burns",
		"description": "You have superficial burns. You turn as red as a lobster, but otherwise suffer no mechanical effects. Magical healing cures your flash burns. Alternatively, they will heal on their own in 2 weeks.",
		"extraInjuries": 0
	},
	{
		"minRoll": 21,
		"maxRoll": 1000,
		"title": "No Injury",
		"description": "",
		"extraInjuries": 0
	}],
	"necrotic": [
	{
		"minRoll": 1,
		"maxRoll": 1,
		"title": "Spiritual Injury",
		"description": "You are afflicted with intense apathy and depression. You have disadvantage on Intelligence, Wisdom, and Charisma ability checks and Intelligence, Wisdom, and Charisma saving throws. Magic such as the heal or regenerate spell can resolve your spiritual injury, but such spells must be cast by a cleric, druid, or other class that uses divine magic.",
		"extraInjuries": 0
	},
	{
		"minRoll": 2,
		"maxRoll": 2,
		"title": "Withered Hand",
		"description": "You lose a hand. You can no longer hold anything with two hands, and you can hold only a single object at a time. Magic such as the regenerate spell can restore the lost appendage.",
		"extraInjuries": 0
	},
	{
		"minRoll": 3,
		"maxRoll": 3,
		"title": "Withered Foot",
		"description": "Your speed on foot is halved, and you must use a cane or crutch to move. You fall prone after using the Dash action. You have disadvantage on Dexterity checks made to balance. Magic such as the regenerate spell can restore the lost appendage.",
		"extraInjuries": 0
	},
	{
		"minRoll": 4,
		"maxRoll": 4,
		"title": "Major Organ Necrosis",
		"description": "Whenever you attempt an action in combat, you must make a DC 15 Constitution saving throw. On a failed save, you lose your action and can&apos;t use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal or regenerate, cures the Major Organ Necrosis.",
		"extraInjuries": 0
	},
	{
		"minRoll": 5,
		"maxRoll": 7,
		"title": "Minor Organ Necrosis",
		"description": "Whenever you attempt an action in combat, you must make a DC 10 Constitution saving throw. On a failed save, you lose your action and can&apos;t use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal or regenerate, repair the injury, or if you spend ten days doing nothing but resting, it will heal naturally.",
		"extraInjuries": 0
	},
	{
		"minRoll": 8,
		"maxRoll": 10,
		"title": "Necrotic Stench",
		"description": "You smell like rotting flesh. You have disadvantage on Charisma (Persuasion) checks. Magical healing of 6th level or higher, such as heal or regenerate, removes the smell.",
		"extraInjuries": 0
	},
	{
		"minRoll": 11,
		"maxRoll": 13,
		"title": "Necrotising Wound",
		"description": "Your hit point maximum is reduced by 1 every 24 hours the wound persists. If your hit point maximum drops to 0, you die. The wound heals if you receive magical healing. Alternatively, someone can tend to the wound and make a DC 15 Wisdom (Medicine) check once every 24 hours. After ten successes, the wound heals.",
		"extraInjuries": 0
	},
	{
		"minRoll": 14,
		"maxRoll": 16,
		"title": "Inflammation",
		"description": "Your muscles are irritated and inflamed. You have disadvantage on strength checks. Magical healing resolves the inflammation. Alternatively, it will resolve on its own in two weeks.",
		"extraInjuries": 0
	},
	{
		"minRoll": 17,
		"maxRoll": 20,
		"title": "Necrotic Discoloration",
		"description": "You get white and grey spots on your cheeks. The spots don&apos;t have any adverse effect. Magical healing of 6th level or higher, such as heal or regenerate, removes the spots.",
		"extraInjuries": 0
	},
	{
		"minRoll": 21,
		"maxRoll": 1000,
		"title": "No Injury",
		"description": "",
		"extraInjuries": 0
	}],
	"piercing": [
	{
		"minRoll": 1,
		"maxRoll": 1,
		"title": "Lose an Eye",
		"description": "You have disadvantage on Wisdom (Perception) checks that rely on sight and on ranged attack rolls. Magic such as the regenerate spell can restore the lost eye. If you have no eyes left after sustaining this injury, you&apos;re blinded.",
		"extraInjuries": 0
	},
	{
		"minRoll": 2,
		"maxRoll": 2,
		"title": "Throat Injury",
		"description": "You gain a level of exhaustion which cannot be removed by normal means. You also have disadvantage on constitution checks. Magic such as the regenerate spell can heal your throat injury.",
		"extraInjuries": 0
	},
	{
		"minRoll": 3,
		"maxRoll": 3,
		"title": "Groin Injury",
		"description": "Your speed on foot is halved, and you must use a cane or crutch to move. You cannot take the Dash action. You are also sterile. Magic such as the regenerate spell can heal the groin injury.",
		"extraInjuries": 0
	},
	{
		"minRoll": 4,
		"maxRoll": 4,
		"title": "Cardiac Injury",
		"description": "You gain a level of exhaustion which cannot be removed by normal means. If you fail a saving throw against fear or fear effects, you gain another level of exhaustion that can be removed by normal means. Magic such as the regenerate spell can heal your cardiac damage.",
		"extraInjuries": 0
	},
	{
		"minRoll": 5,
		"maxRoll": 7,
		"title": "Organ Damage",
		"description": "Whenever you attempt an action in combat, you must make a DC 15 Constitution saving throw. On a failed save, you lose your action and can&apos;t use reactions until the start of your next turn. Magic such as the regenerate spell can cure your organ damage. Alternatively, someone can tend to the organ damage and make a DC 15 Wisdom (Medicine) check once every day. After ten successes, the organ damage is resolved.",
		"extraInjuries": 0
	},
	{
		"minRoll": 8,
		"maxRoll": 10,
		"title": "Pierced Stomach",
		"description": "When you complete a long rest, you must succeed at a Constitution saving throw DC 10 or gain the poisoned condition until you complete a long rest. Magical healing of 6th level or higher, such as heal or regenerate, heals the pierced stomach, or if you spend ten days doing nothing but resting, it heals on its own.",
		"extraInjuries": 0
	},
	{
		"minRoll": 11,
		"maxRoll": 13,
		"title": "Horrible Scar",
		"description": "You are disfigured to the extent that the wound can&apos;t be easily concealed . You have disadvantage on Charisma (Persuasion) checks and advantage on Charisma (Intimidation) checks. Magical healing of 6th level or higher, such as heal and regenerate, removes the scar.",
		"extraInjuries": 0
	},
	{
		"minRoll": 14,
		"maxRoll": 16,
		"title": "Festering Wound",
		"description": "Your hit point maximum is reduced by 1 every 24 hours the wound persists. If your hit point maximum drops to 0, you die. The wound heals if you receive any magical healing. Alternatively, someone can tend to the wound and make a DC 15 Wisdom (Medicine) check once every 24 hours. After ten successes, the wound heals.",
		"extraInjuries": 0
	},
	{
		"minRoll": 17,
		"maxRoll": 20,
		"title": "Minor Scar",
		"description": "The scar doesn&apos;t have any adverse effect. Magical healing of 6th level or higher, such as heal and regenerate, removes the scar.",
		"extraInjuries": 0
	},
	{
		"minRoll": 21,
		"maxRoll": 1000,
		"title": "No Injury",
		"description": "",
		"extraInjuries": 0
	}],
	"poison": [
	{
		"minRoll": 1,
		"maxRoll": 1,
		"title": "Systemic Damage",
		"description": "You have disadvantage on Strength, Dexterity, and Constitution ability checks and Strength, Dexterity, and Constitution saving throws. Magic such as the regenerate spell cures this damage.",
		"extraInjuries": 0
	},
	{
		"minRoll": 2,
		"maxRoll": 2,
		"title": "Major Liver Damage",
		"description": "When you complete a long rest, you must succeed at a Constitution saving throw of DC 15 or gain the poisoned condition until you complete a long rest. Additionally, whenever you take poison damage, you take an additional 3 (1d6) poison damage. Anytime you drink alcohol or take another drug, you take 3 (1d6) poison damage. Magic such as the regenerate spell can cure your liver failure.",
		"extraInjuries": 0
	},
	{
		"minRoll": 3,
		"maxRoll": 3,
		"title": "Minor Liver Damage",
		"description": "When you complete a long rest, you must succeed at a Constitution saving throw of DC 10 or gain the poisoned condition until you complete a long rest. Additionally, whenever you take poison damage, you take an additional 2 (1d4) poison damage. Anytime you drink alcohol or take another drug, you take 2 (1d4) poison damage. Magic such as the regenerate spell can cure your liver failure.",
		"extraInjuries": 0
	},
	{
		"minRoll": 4,
		"maxRoll": 4,
		"title": "Major Kidney Failure",
		"description": "When you complete a long rest, you must succeed at a Constitution saving throw of DC 15 or gain the poisoned condition until you complete a long rest. Magic such as the regenerate spell can cure your kidney failure. Alternatively, someone can tend to the kidney failure and make a DC 15 Wisdom (Medicine) check once every week. After ten successes, the kidney failure is resolved.",
		"extraInjuries": 0
	},
	{
		"minRoll": 5,
		"maxRoll": 7,
		"title": "Minor Kidney Failure",
		"description": "When you complete a long rest, you must succeed at a Constitution saving throw of DC 10 or gain the poisoned condition until you complete a long rest. Magic such as the regenerate spell can cure your kidney failure. Alternatively, someone can tend to the kidney failure and make a DC 15 Wisdom (Medicine) check once every week. After ten successes, the kidney failure is resolved.",
		"extraInjuries": 0
	},
	{
		"minRoll": 8,
		"maxRoll": 10,
		"title": "Cardiac Injury",
		"description": "You gain a level of exhaustion which cannot be removed by normal means. If you fail a saving throw against fear or fear effects, you gain another level of exhaustion that can be removed by normal means. Magic such as the regenerate spell can heal your cardiac damage.",
		"extraInjuries": 0
	},
	{
		"minRoll": 11,
		"maxRoll": 13,
		"title": "Vertigo",
		"description": "You have disadvantage on Dexterity checks. Magic such as the regenerate spell can cure your vertigo. Alternatively, it will resolve on its own in 8 weeks.",
		"extraInjuries": 0
	},
	{
		"minRoll": 14,
		"maxRoll": 16,
		"title": "Nausea",
		"description": "You have disadvantage on Constitution checks. Magical healing cures your nausea. Alternatively, it will resolve on its own in 4 weeks.",
		"extraInjuries": 0
	},
	{
		"minRoll": 17,
		"maxRoll": 20,
		"title": "Minor Nausea",
		"description": "You must succeed at a DC 10 Constitution saving throw before you can consume food. Magical healing cures your nausea. Alternatively, it will resolve on its own in 1 week.",
		"extraInjuries": 0
	},
	{
		"minRoll": 21,
		"maxRoll": 1000,
		"title": "No Injury",
		"description": "",
		"extraInjuries": 0
	}],
	"psychic": [
	{
		"minRoll": 1,
		"maxRoll": 1,
		"title": "Brain Injury",
		"description": "You have suffered a brain injury. You have disadvantage on Intelligence, Wisdom, and Charisma checks, as well as Intelligence, Wisdom, and Charisma saving throws. If you fail a saving throw against bludgeoning damage, force damage, or psychic damage, you are also stunned until the end of your next turn. Magic such as the regenerate spell can restore your full brain function.",
		"extraInjuries": 0
	},
	{
		"minRoll": 2,
		"maxRoll": 2,
		"title": "Indefinite Madness",
		"description": "Roll on the Indefinite Madness table in the Dungeon Masters Guide.",
		"extraInjuries": 0
	},
	{
		"minRoll": 3,
		"maxRoll": 3,
		"title": "Severe Headaches",
		"description": "You have disadvantage on Wisdom checks and Wisdom saving throws. If you fail a saving throw against bludgeoning damage, force damage, or psychic damage, you are also stunned until the end of your next turn. Magic such as the regenerate spell can cure your severe headaches.",
		"extraInjuries": 0
	},
	{
		"minRoll": 4,
		"maxRoll": 4,
		"title": "Phobia",
		"description": "You develop a debilitating fear of something in the situation from which you gained your injury. For example, if you were damaged by a mind flayer, you might have a fear of octopuses. The DM will decide. When you are confronted with your phobia, you have disadvantage on all ability checks and saving throws. Magic such as the regenerate spell can cure your phobia.",
		"extraInjuries": 0
	},
	{
		"minRoll": 5,
		"maxRoll": 7,
		"title": "Long-term Madness",
		"description": "Roll on the Long-term Madness table in the Dungeon Masters Guide. Your madness lasts twice as long.",
		"extraInjuries": 0
	},
	{
		"minRoll": 8,
		"maxRoll": 10,
		"title": "Short-term Madness",
		"description": "Roll on the Short-term Madness table in the Dungeon Masters Guide. Your madness lasts twice as long.",
		"extraInjuries": 0
	},
	{
		"minRoll": 11,
		"maxRoll": 13,
		"title": "Weak Persona",
		"description": "You have suffered damage to your sense of self. You have disadvantage on Charisma checks. Magic such as the regenerate spell can heal your weak persona. Alternatively, it will heal on its own in four weeks.",
		"extraInjuries": 0
	},
	{
		"minRoll": 14,
		"maxRoll": 16,
		"title": "Minor Headaches",
		"description": "You have disadvantage on Wisdom checks. Magical healing cures your minor headaches. Alternatively, they will resolve on their own in two weeks.",
		"extraInjuries": 0
	},
	{
		"minRoll": 17,
		"maxRoll": 20,
		"title": "Inappropriate Volume",
		"description": "You can&apos;t regulate your volume. You shout when you intend to whisper, and whisper when you intend to shout. Magical healing cures your inappropriate volume.",
		"extraInjuries": 0
	},
	{
		"minRoll": 21,
		"maxRoll": 1000,
		"title": "No Injury",
		"description": "",
		"extraInjuries": 0
	}],
	"radiant": [
	{
		"minRoll": 1,
		"maxRoll": 1,
		"title": "Blindness",
		"description": "Your eyes are destroyed; you gain the blinded condition. Magic such as the regenerate spell can restore your sight.",
		"extraInjuries": 0
	},
	{
		"minRoll": 2,
		"maxRoll": 2,
		"title": "Partial Blindness",
		"description": "Your retinas are damaged; you have disadvantage on Wisdom (Perception) checks that rely on sight and on ranged attack rolls. Magic such as the regenerate spell can restore the lost eye. If you have already suffered partial blindness, you&apos;re blinded.",
		"extraInjuries": 0
	},
	{
		"minRoll": 3,
		"maxRoll": 3,
		"title": "Third Degree Burns",
		"description": "You have disadvantage on ability checks and Constitution saving throws. If you fail a saving throw against an effect that causes fire damage, you also gain the stunned condition until the end of your next turn. Magic such as the regenerate spell cures this damage. Alternatively, someone can tend to the burns and make a DC 15 Wisdom (Medicine) check once every week. After ten successes, the burns heal. If you already have third degree burns, you instead suffer fourth degree burns as per the Fire chart.",
		"extraInjuries": 0
	},
	{
		"minRoll": 4,
		"maxRoll": 4,
		"title": "Second Degree Burns",
		"description": "You have disadvantage on Strength, Dexterity, and Constitution checks. Magic such as the regenerate spell cures this damage. Alternatively, they will heal on their own in 4 weeks. If you already have second degree burns, you instead suffer third degree burns.",
		"extraInjuries": 0
	},
	{
		"minRoll": 5,
		"maxRoll": 7,
		"title": "Large Skin Tumors",
		"description": "You develop several large, painful skin tumors. You have disadvantage on Charisma and Wisdom checks. Magic such as the regenerate spell cures your large skin tumors. If your large skin tumors are not cured within six months, you develop Systemic Damage as per the poison table.",
		"extraInjuries": 0
	},
	{
		"minRoll": 8,
		"maxRoll": 10,
		"title": "Small Skin Tumors",
		"description": "You develop several small, painless skin tumors. You have disadvantage on Charisma checks. Magic such as the regenerate spell cures your small skin tumors. If your small skin tumors are not cured within one year, you develop Large Skin Tumors.",
		"extraInjuries": 0
	},
	{
		"minRoll": 11,
		"maxRoll": 13,
		"title": "Blisters",
		"description": "You have severe blisters. You have disadvantage on Dexterity checks. The blisters heal if you receive magical healing. Alternatively, someone can tend to the blisters and make a DC 15 Wisdom (Medicine) check once every 24 hours. After seven successes, the blisters heal.",
		"extraInjuries": 0
	},
	{
		"minRoll": 14,
		"maxRoll": 16,
		"title": "First Degree Burns",
		"description": "You have superficial but painful burns. Whenever you take fire damage, you take an additional 1 point of damage. Magical healing cures the burns; alternatively, they will heal on their own in 2 weeks. If you already have first degree burns, you instead suffer second degree burns.",
		"extraInjuries": 0
	},
	{
		"minRoll": 17,
		"maxRoll": 20,
		"title": "Minor Nausea",
		"description": "You must succeed at a DC 10 Constitution saving throw before you can consume food. Magical healing cures your nausea. Alternatively, it will resolve on its own in 1 week.",
		"extraInjuries": 0
	},
	{
		"minRoll": 21,
		"maxRoll": 1000,
		"title": "No Injury",
		"description": "",
		"extraInjuries": 0
	}],
	"slashing": [
	{
		"minRoll": 1,
		"maxRoll": 1,
		"title": "Lose an Eye",
		"description": "You have disadvantage on Wisdom (Perception) checks that rely on sight and on ranged attack rolls. Magic such as the regenerate spell can restore the lost eye. If you have no eyes left after sustaining this injury, you&apos;re blinded.",
		"extraInjuries": 0
	},
	{
		"minRoll": 2,
		"maxRoll": 2,
		"title": "Lose an Arm or a Hand",
		"description": "You can no longer hold anything with two hands, and you can hold only a single object at a time. Magic such as the regenerate spell can restore the lost appendage.",
		"extraInjuries": 0
	},
	{
		"minRoll": 3,
		"maxRoll": 3,
		"title": "Lose a Foot or Leg",
		"description": "Your speed on foot is halved, and you must use a cane or crutch to move unless you have a peg leg or other prosthesis. You fall prone after using the Dash action. You have disadvantage on Dexterity checks made to balance. Magic such as the regenerate spell can restore the lost appendage.",
		"extraInjuries": 0
	},
	{
		"minRoll": 4,
		"maxRoll": 4,
		"title": "Hamstrung",
		"description": "Your speed on foot is reduced by 5 feet. You must make a DC 10 Dexterity saving throw after using the Dash action. If you fail the save, you fall prone. Magic such as the regenerate spell can cure your severed hamstring tendons.",
		"extraInjuries": 0
	},
	{
		"minRoll": 5,
		"maxRoll": 7,
		"title": "Major Internal Injury",
		"description": "Whenever you attempt an action in combat, you must make a DC 15 Constitution saving throw. On a failed save, you lose your action and can&apos;t use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal or regenerate, heals the internal injury; alternatively, if you spend ten days doing nothing but resting, it heals on its own.",
		"extraInjuries": 0
	},
	{
		"minRoll": 8,
		"maxRoll": 10,
		"title": "Minor Internal Injury",
		"description": "Whenever you attempt an action in combat, you must make a DC 10 Constitution saving throw. On a failed save, you lose your action and can&apos;t use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal or regenerate, heals the internal injury; alternatively, if you spend ten days doing nothing but resting, it heals on its own.",
		"extraInjuries": 0
	},
	{
		"minRoll": 11,
		"maxRoll": 13,
		"title": "Horrible Scar",
		"description": "You are disfigured to the extent that the wound can&apos;t be easily concealed. You have disadvantage on Charisma (Persuasion) checks and advantage on Charisma (Intimidation) checks. Magical healing of 6th level or higher, such as heal or regenerate, removes the scar.",
		"extraInjuries": 0
	},
	{
		"minRoll": 14,
		"maxRoll": 16,
		"title": "Festering Wound",
		"description": "Your hit point maximum is reduced by 1 every 24 hours the wound persists. If your hit point maximum drops to 0, you die. The wound heals if you receive magical healing. Alternatively, someone can tend to the wound and make a DC 15 Wisdom (Medicine) check once every 24 hours. After ten successes, the wound heals.",
		"extraInjuries": 0
	},
	{
		"minRoll": 17,
		"maxRoll": 20,
		"title": "Minor Scar",
		"description": "The scar doesn&apos;t have any adverse effect. Magical healing of 6th level or higher, such as heal or regenerate, removes the scar.",
		"extraInjuries": 0
	},
	{
		"minRoll": 21,
		"maxRoll": 1000,
		"title": "No Injury",
		"description": "",
		"extraInjuries": 0
	}],
	"siege": [
	{
		"minRoll": 1,
		"maxRoll": 2,
		"title": "Pulverized",
		"description": "You are dead.  Your remains are reduced to a bloody pulp that is unrecognizable without a DC 15 Wisdom (Insight) check or magical means. If this injury was caused by explosive or burning ammunition, your remains are burned and unusable for the purpose of the Resurrection spell and you can only be returned to life with the True Resurrection or Wish spells.",
		"extraInjuries": 0
	},
	{
		"minRoll": 3,
		"maxRoll": 5,
		"title": "Crushed",
		"description": "You are dead.  Your remains are reduced to a mix of body parts and crushed entrails that are unrecognizable without a DC 12 Wisdom (Insight) check by an ally. Parts of your body can be used for a Resurrection spell. If this injury was caused by explosive ammunition, a successful DC 12 Intelligence (Investigation) check is needed to find the part usable for the Resurrection spell.",
		"extraInjuries": 0
	},
	{
		"minRoll": 6,
		"maxRoll": 8,
		"title": "Mangled",
		"description": "You are dead.  Your remains are torn into several parts, most of your organs spilled out. Parts of your body can be used for a Resurrection spell. Unless this injury was caused by explosive ammunition, most of your head is intact which allows the use of the Speak with Dead spell.",
		"extraInjuries": 0
	},
	{
		"minRoll": 9,
		"maxRoll": 13,
		"title": "Dead",
		"description": "You are dead.  You can be raised back to life with the Revivify or Raise Dead spell, but you take 3 injuries that must be resolved immediately upon returning to life.",
		"extraInjuries": 3
	},
	{
		"minRoll": 14,
		"maxRoll": 16,
		"title": "Dying",
		"description": "You are dying.  You automatically fail 2 of your Death Saves. You take 2 injuries that must be resolved upon stabilization.",
		"extraInjuries": 2
	},
	{
		"minRoll": 17,
		"maxRoll": 20,
		"title": "Mortally Wounded",
		"description": "You are dying. You automatically fail 1 of your Death Saves. You take 1 injury that must be resolved upon stabilization.",
		"extraInjuries": 1
	},
	{
		"minRoll": 21,
		"maxRoll": 1000,
		"title": "No Injury",
		"description": "",
		"extraInjuries": 0
	}],
	"thunder": [
	{
		"minRoll": 1,
		"maxRoll": 1,
		"title": "Brain Injury",
		"description": "You have suffered a brain injury. You have disadvantage on Intelligence, Wisdom, and Charisma checks, as well as Intelligence, Wisdom, and Charisma saving throws. If you fail a saving throw against bludgeoning damage, force damage, or psychic damage, you are also stunned until the end of your next turn. Magic such as the regenerate spell can restore your full brain functions.",
		"extraInjuries": 0
	},
	{
		"minRoll": 2,
		"maxRoll": 2,
		"title": "Deafness",
		"description": "Your eardrums have been destroyed; you gain the deafened condition. Magic such as the regenerate spell can restore your hearing.",
		"extraInjuries": 0
	},
	{
		"minRoll": 3,
		"maxRoll": 3,
		"title": "Partial Deafness",
		"description": "Your eardrums have been damaged; you are hard of hearing. You have disadvantage on any ability check that requires hearing. Magic such as the regenerate spell can restore your hearing.",
		"extraInjuries": 0
	},
	{
		"minRoll": 4,
		"maxRoll": 4,
		"title": "Severe Headaches",
		"description": "You have disadvantage on Wisdom checks and Wisdom saving throws. If you fail a saving throw against bludgeoning damage, force damage, or psychic damage, you are also stunned until the end of your next turn. Magic such as the regenerate spell can cure your severe headaches.",
		"extraInjuries": 0
	},
	{
		"minRoll": 5,
		"maxRoll": 7,
		"title": "Internal Injury",
		"description": "Whenever you attempt an action in combat, you must make a DC 15 Constitution saving throw. On a failed save, you lose your action and can&apos;t use reactions until the start of your next turn. Magical healing of 6th level or higher, such as heal or regenerate, cures the internal injury, or if you spend ten days doing nothing but resting, it heals on its own.",
		"extraInjuries": 0
	},
	{
		"minRoll": 8,
		"maxRoll": 10,
		"title": "Major Concussion",
		"description": "You have disadvantage on Intelligence checks, Wisdom checks, and Charisma checks, as well as Constitution saving throws to maintain concentration. Magical healing of 6th level or higher, such as heal or regenerate, cures the concussion. Alternatively, it heals on its own in four weeks.",
		"extraInjuries": 0
	},
	{
		"minRoll": 11,
		"maxRoll": 13,
		"title": "Minor Concussion",
		"description": "You have disadvantage on Intelligence checks. The concussion heals if you receive any magical healing; alternatively, it heals on its own in two weeks. If you already have a minor concussion, you suffer a major concussion.",
		"extraInjuries": 0
	},
	{
		"minRoll": 14,
		"maxRoll": 16,
		"title": "Minor Headaches",
		"description": "You have disadvantage on Wisdom checks. Magical healing of 6th level or higher, such as heal or regenerate, cures the headaches. Alternatively, they will resolve on their own in two weeks.",
		"extraInjuries": 0
	},
	{
		"minRoll": 17,
		"maxRoll": 20,
		"title": "Severe Bruising",
		"description": "You suffer severe bruising over an extensive portion of your anatomy. Anytime you suffer bludgeoning or force damage, you suffer an additional point of bludgeoning or force damage. The bruising heals if you receive magical healing. Alternatively, it heals on its own in 2 weeks.",
		"extraInjuries": 0
	},
	{
		"minRoll": 21,
		"maxRoll": 1000,
		"title": "No Injury",
		"description": "",
		"extraInjuries": 0
	}]
};