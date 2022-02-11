require 'open-uri'

# RESET DB
User.destroy_all

# USERS
u1 = User.create!(email: 'elsilvercabs@cabs.cabs', username: 'El Silver Cabs', is_artist: true, bio: 'Laura - Vocals, Jake - Vocals/Bass, Zack - Guitar/Vocals, Mike - Guitar, Michael - Drums', password: 'schway', color_profile: '#ffffff/#363636/#888888/#0687f5/#f8f8f8/#f2f2f2')
u2 = User.create!(email: 'leaked@leakthis.biz', username: 'Leaked', is_artist: true, bio: 'Not available in shops', password: 'sweatshirt', color_profile: '#ffffff/#363636/#888888/#0687f5/#f8f8f8/#f2f2f2')
u3 = User.create!(email: 'cosmicdancer@jeepster.gov', username: 'T. Rex', is_artist: true, bio: "Life's a gas", password: 'rawramp', color_profile: '#ffffff/#363636/#888888/#0687f5/#f8f8f8/#f2f2f2')
u4 = User.create!(email: 'yourrizzos@rizbiz.org', username: 'The Rizzos', is_artist: true, bio: "We're a gang", password: 'howitwas', color_profile: '#ffffff/#363636/#888888/#0687f5/#f8f8f8/#f2f2f2')

Release.destroy_all 

r1 = Release.create!(title: 'Electric Warrior', description: 'One of the greatest glam-rock records ever recorded - 1971', artist_id: u3.id)
r2 = Release.create!(title: '20th Century Boy (Single)', artist_id: u3.id)
r3 = Release.create!(title: 'Solid Gold Easy Action (Single)', artist_id: u3.id)
r5 = Release.create!(title: 'El Silver Cabs', artist_id: u1.id)
r6 = Release.create!(title: 'Leaked', artist_id: u2.id)
r7 = Release.create!(title: 'How It Was', artist_id: u4.id)


Song.destroy_all 

# T REX

s1 = Song.create!(name: 'Mambo Sun', track: 1, release_id: r1.id)
s2 = Song.create!(name: 'Cosmic Dancer', track: 2, release_id: r1.id)
s3 = Song.create!(name: 'Jeepster', track: 3, release_id: r1.id)
s4 = Song.create!(name: 'Monolith', track: 4, release_id: r1.id)
s5 = Song.create!(name: 'Lean Woman Blues', track: 5, release_id: r1.id)
s6 = Song.create!(name: 'Bang a Gong (Get It On)', track: 6, release_id: r1.id)
s7 = Song.create!(name: 'Planet Queen', track: 7, release_id: r1.id)
s8 = Song.create!(name: 'Girl', track: 8, release_id: r1.id)
s9 = Song.create!(name: 'The Motivator', track: 9, release_id: r1.id)
s10 = Song.create!(name: "Life's a Gas", track: 10, release_id: r1.id)
s11 = Song.create!(name: 'Rip Off', track: 11, release_id: r1.id)
s12 = Song.create!(name: 'There Was a Time', track: 12, release_id: r1.id)
s13 = Song.create!(name: 'Raw Ramp', track: 13, release_id: r1.id)
s14 = Song.create!(name: 'Planet Queen (Acoustic)', track: 14, release_id: r1.id)
s15 = Song.create!(name: 'Hot Love', track: 15, release_id: r1.id)
s16 = Song.create!(name: 'Woodland Rock', track: 16, release_id: r1.id)
s17 = Song.create!(name: 'Solid Gold Easy Action', track: 1, release_id: r3.id, lyrics: 
"Life is the same
And it always will be
Easy as picking foxes from a tree
But I can't get no satisfaction
All I want is easy action
A stud is a lamb
With the thoughts of a tiger
Who moves like a cat
And knows how to ride her
But I can't get no satisfaction
All I want is easy action, baby
Stroll on
I can't get no satisfaction
All I want is easy action
A woman from the east with her headlights shining
Eased my pain and stopped my crying
But I can't get no satisfaction
All I want is easy action, baby
And all my hair will keep her smiling
With my wondrous walk and my telephone dialing
But I can't get no satisfaction
All I want is easy action, baby
I know you're shrewd and she's a dude
But all I want is easy action
I know you're shrewd and she's a dude
But all I want is easy action
I know you're shrewd and she's a dude
But all I want is easy action, baby
Stroll on")
s18 = Song.create!(name: '20th Century Boy', track: 1, lyrics: "Friends say it's fine, friends say it's good,
Everybody says it's just like Robin Hood.
I move like a cat, talk like a rat, sting like a bee,
Babe I wanna be your man.
Well it's plain to see, you were meant for me,
Yeah I'm your toy, the twentieth century boy.
20th century toy I wanna be your boy.
20th century toy I wanna be your boy.
Friends say it's fine, friends say it's good,
Everybody says it's just like Robin Hood.
Fly like a plane, drive like a car, Ball like a hound
Babe I wanna be your man.
Well its it's plain to see, you were meant for me,
Yeah I'm your toy, the twentieth century boy
20th century toy I wanna be your boy.
20th century toy I wanna be your boy.
Friends say it's fine, friends say it's good,
Everybody says it's just like Robin Hood.
Move like a cat, talk like a rat, sting like a bee.
Hey babe i'm wanna be your man
It's plain to see you, were meant for me,
Yeah I'm your toy Your twentieth century boy.
20th century toy I wanna be your boy", release_id: r2.id)

# CABS

s20 = Song.create!(name: 'Figurines', track: 1, release_id: r5.id)
s21 = Song.create!(name: 'Shrink', track: 2, release_id: r5.id)
s22 = Song.create!(name: 'Bloom', track: 3, release_id: r5.id)
s23 = Song.create!(name: 'Treading Water', track: 4, release_id: r5.id)
s24 = Song.create!(name: "Wouldn't You Rather", track: 5, release_id: r5.id)
s25 = Song.create!(name: 'Gun', track: 6, release_id: r5.id)
s26 = Song.create!(name: 'Pretty Lady', track: 7, release_id: r5.id)
s27 = Song.create!(name: 'Weekend', track: 8, release_id: r5.id)

# LEAKED 

s28 = Song.create!(name: 'Hanging Around', track: 1, release_id: r6.id)
s29 = Song.create!(name: 'Fever', track: 2, release_id: r6.id)
s30 = Song.create!(name: 'Teacup', track: 3, release_id: r6.id)
s31 = Song.create!(name: 'Sweatshirt', track: 4, release_id: r6.id)


# RIZZOS

s32 = Song.create!(name: 'Lost Boys', track: 1, release_id: r7.id)
s33 = Song.create!(name: 'Way Out', track: 2, release_id: r7.id)
s34 = Song.create!(name: 'Breslin', track: 3, release_id: r7.id)
s35 = Song.create!(name: 'Worth It', track: 4, release_id: r7.id)
s36 = Song.create!(name: 'Hamjrgers', track: 5, release_id: r7.id)
s37 = Song.create!(name: 'Nowhere In Particular', track: 6, release_id: r7.id)
s38 = Song.create!(name: 'Heavy Song', track: 7, release_id: r7.id)
s39 = Song.create!(name: 'Crybaby', track: 8, release_id: r7.id)
s40 = Song.create!(name: 'Joey For President', track: 9, release_id: r7.id)
s41 = Song.create!(name: 'Long Dog', track: 10, release_id: r7.id)


# ADD SEED IMAGES

prof_img = URI.open('https://bandplace-seeds.s3.amazonaws.com/images/trex_profile.jpg')
banner_img = URI.open('https://bandplace-seeds.s3.amazonaws.com/images/trex_banner.jpg')
e_warrior = URI.open('https://bandplace-seeds.s3.amazonaws.com/images/electric_warrior.jpg')
century_boy = URI.open('https://bandplace-seeds.s3.amazonaws.com/images/20th_century.jpg')
solid_gold = URI.open('https://bandplace-seeds.s3.amazonaws.com/images/solid_gold_square.jpg')
cabs_prof = URI.open('https://bandplace-seeds.s3.amazonaws.com/images/cabs_profile.jpg')
cabs_cover = URI.open('https://bandplace-seeds.s3.amazonaws.com/images/el_silver_cabs_cover.jpeg')
leaked_prof = URI.open('https://bandplace-seeds.s3.amazonaws.com/images/leaked_prof.jpg')
leaked_cover = URI.open('https://bandplace-seeds.s3.amazonaws.com/images/leaked_square.jpg')
rizzos_banner = URI.open('https://bandplace-seeds.s3.amazonaws.com/images/rizzos_banner.png')
rizzos_prof = URI.open('https://bandplace-seeds.s3.amazonaws.com/images/rizzos_prof.jpg')
rizzos_cover = URI.open('https://bandplace-seeds.s3.amazonaws.com/images/how_it_was_square.jpg')

u3.profile_image.attach(io: prof_img, filename: 'trex_profile.jpg')
u3.banner_image.attach(io: banner_img, filename: 'trex_banner.jpg')
u1.profile_image.attach(io: cabs_prof, filename: 'cabs_profile.jpg')
u2.profile_image.attach(io: leaked_prof, filename: 'leaked_prof.jpg')
u4.profile_image.attach(io: rizzos_prof, filename: 'rizzos_prof.jpg')
u4.banner_image.attach(io: rizzos_banner, filename: 'rizzos_banner.jpg')

r1.cover_image.attach(io: e_warrior, filename: 'electric_warrior.jpg')
r2.cover_image.attach(io: century_boy, filename: '20th_century.jpg')
r3.cover_image.attach(io: solid_gold, filename: 'solid_gold.jpg')
r5.cover_image.attach(io: cabs_cover, filename: 'el_silver_cabs_cover.jpg')
r6.cover_image.attach(io: leaked_cover, filename: 'leaked_square.jpg')
r7.cover_image.attach(io: rizzos_cover, filename: 'how_it_was_square.jpg')


# ADD SEED AUDIO 

# T REX

mambo = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/mambo_sun.mp3')
cosmic = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/cosmic_dancer.mp3')
jeepster = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/jeepster.mp3')
monolith = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/monolith.mp3')
lean = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/lean_woman_blues.mp3')
bang = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/bang_a_gong.mp3')
planet = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/planet_queen.mp3')
girl = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/girl.mp3')
motivator = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/the_motivator.mp3')
gas = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/lifes_a_gas.mp3')
rip = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/rip_off.mp3')
time = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/there_was_a_time.mp3')
raw = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/raw_ramp.mp3')
acoustic = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/planet_queen_acoustic.mp3')
hot = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/hot_love.mp3')
woodland = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/woodland_rock.mp3')
easy = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/solid_gold_easy_action.mp3')
century = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/century_boy.mp3')

s1.track_audio.attach(io: mambo, filename: 'mambo_sun.mp3')
s2.track_audio.attach(io: cosmic, filename: 'cosmic_dancer.mp3')
s3.track_audio.attach(io: jeepster, filename: 'jeepster.mp3')
s4.track_audio.attach(io: monolith, filename: 'monolith.mp3')
s5.track_audio.attach(io: lean, filename: 'lean_woman_blues.mp3')
s6.track_audio.attach(io: bang, filename: 'bang_a_gong.mp3')
s7.track_audio.attach(io: planet, filename: 'planet_queen.mp3')
s8.track_audio.attach(io: girl, filename: 'girl.mp3')
s9.track_audio.attach(io: motivator, filename: 'motivator.mp3')
s10.track_audio.attach(io: gas, filename: 'lifes_a_gas.mp3')
s11.track_audio.attach(io: rip, filename: 'rip_off.mp3')
s12.track_audio.attach(io: time, filename: 'there_was_a_time.mp3')
s13.track_audio.attach(io: raw, filename: 'raw_ramp.mp3')
s14.track_audio.attach(io: acoustic, filename: 'planet_queen_acoustic.mp3')
s15.track_audio.attach(io: hot, filename: 'hot_love.mp3')
s16.track_audio.attach(io: woodland, filename: 'woodland_rock.mp3')
s17.track_audio.attach(io: easy, filename: 'solid_gold_easy_action.mp3')
s18.track_audio.attach(io: century, filename: 'century_boy.mp3')

# CABS

figurines = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/01_Figurines_05_02_17_MSTR.wav')
shrink = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/02_Shrink_05_02_17_MSTR.wav')
bloom = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/03_Bloom_05_02_17_MSTR.wav')
treading = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/treading_water.wav')
rather = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/wouldnt_you_rather.wav')
gun = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/06_Gun_05_02_17_MSTR.wav')
pretty = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/pretty_lady.wav')
weekend = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/08_Weekend_05_02_17_MSTR.wav')


s20.track_audio.attach(io: figurines, filename: '01_Figurines_05_02_17_MSTR.wav')
s21.track_audio.attach(io: shrink, filename: '02_Shrink_05_02_17_MSTR.wav')
s22.track_audio.attach(io: bloom, filename: '03_Bloom_05_02_17_MSTR.wav')
s23.track_audio.attach(io: treading, filename: 'treading_water.wav')
s24.track_audio.attach(io: rather, filename: 'wouldnt_you_rather.wav')
s25.track_audio.attach(io: gun, filename: '06_Gun_05_02_17_MSTR.wav')
s26.track_audio.attach(io: pretty, filename: 'pretty_lady.wav')
s27.track_audio.attach(io: weekend, filename: '08_Weekend_05_02_17_MSTR.wav')


# LEAKED

hanging = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/hanging_around.mp3')
fever = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/Gelernter_Fever_MasteringFinalProject_OMPRD-662.mp3')
teacup = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/Gelernter_Teacup_MasteringFinalProject_OMPRD-662.mp3')
sweatshirt = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/Gelernter_Sweatshirt_MasteringFinalProject_OMPRD-662.mp3')

s28.track_audio.attach(io: hanging, filename: 'hanging_around.mp3')
s29.track_audio.attach(io: fever, filename: 'Gelernter_Fever_MasteringFinalProject_OMPRD-662.mp3')
s30.track_audio.attach(io: teacup, filename: 'Gelernter_Teacup_MasteringFinalProject_OMPRD-662.mp3')
s31.track_audio.attach(io: sweatshirt, filename: 'Gelernter_Sweatshirt_MasteringFinalProject_OMPRD-662.mp3')


# RIZZOS

lost = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/lostboys.wav')
way = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/wayout.wav')
breslin = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/03_breslin_finalmasterdigitaldistro.wav')
worth = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/worthit.wav')
hamjrgers = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/05_hamjrgers_finalmasterdigitaldistro.wav')
nowhere = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/nowhere_particular.wav')
heavysong = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/heavysong.wav')
crybaby = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/08_crybaby_finalmasterdigitaldistro.wav')
joey = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/joeyforprez.wav')
long = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/longdog.wav')

s32.track_audio.attach(io: lost, filename: 'lostboys.wav')
s33.track_audio.attach(io: way, filename: 'wayout.wav')
s34.track_audio.attach(io:breslin , filename: '03_breslin_finalmasterdigitaldistro.wav')
s35.track_audio.attach(io: worth, filename: 'worthit.wav')
s36.track_audio.attach(io: hamjrgers, filename: '05_hamjrgers_finalmasterdigitaldistro.wav')
s37.track_audio.attach(io: nowhere, filename: 'nowhere_particular.wav')
s38.track_audio.attach(io: heavysong, filename: 'heavysong.wav')
s39.track_audio.attach(io: crybaby, filename: '08_crybaby_finalmasterdigitaldistro.wav')
s40.track_audio.attach(io: joey, filename: 'joeyforprez.wav')
s41.track_audio.attach(io: long, filename: 'longdog.wav')