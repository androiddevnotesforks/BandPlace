require 'open-uri'

# RESET DB
User.destroy_all

# USERS
u1 = User.create!(email: 'test@tests.test', username: 'test', is_artist: true, bio: 'This is a test artist', password: '123123', color_profile: '#ffffff/#363636/#888888/#0687f5/#f8f8f8/#f2f2f2')
u2 = User.create!(email: 'abc@123.biz', username: 'rotary_fan', is_artist: false, bio: 'This is a test fan', password: '123123', color_profile: '#ffffff/#363636/#888888/#0687f5/#f8f8f8/#f2f2f2')
u3 = User.create!(email: 'cosmicdancer@jeepster.gov', username: 'T. Rex', is_artist: true, bio: "Life's a gas", password: 'rawramp', color_profile: '#ffffff/#363636/#888888/#0687f5/#f8f8f8/#f2f2f2')

Release.destroy_all 

r1 = Release.create!(title: 'Electric Warrior', description: 'One of the greatest glam-rock records ever recorded - 1971', artist_id: u3.id)
r2 = Release.create!(title: '20th Century Boy (Single)', artist_id: u3.id)
r3 = Release.create!(title: 'Solid Gold Easy Action (Single)', artist_id: u3.id)
r4 = Release.create!(title: 'Dandy In The Underworld', artist_id: u3.id)

Song.destroy_all 

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
s19 = Song.create!(name: 'Teen Riot Structure', track: 1, release_id: r4.id)


# ADD SEED IMAGES

prof_img = URI.open('https://bandplace-seeds.s3.amazonaws.com/images/trex_profile.jpg')
banner_img = URI.open('https://bandplace-seeds.s3.amazonaws.com/images/trex_banner.jpg')
e_warrior = URI.open('https://bandplace-seeds.s3.amazonaws.com/images/electric_warrior.jpg')
century_boy = URI.open('https://bandplace-seeds.s3.amazonaws.com/images/20th_century.jpg')
solid_gold = URI.open('https://bandplace-seeds.s3.amazonaws.com/images/solid_gold_square.jpg')
dandy = URI.open('https://bandplace-seeds.s3.amazonaws.com/images/dandy.jpg')

u3.profile_image.attach(io: prof_img, filename: 'trex_profile.jpg')
u3.banner_image.attach(io: banner_img, filename: 'trex_banner.jpg')

r1.cover_image.attach(io: e_warrior, filename: 'electric_warrior.jpg')
r2.cover_image.attach(io: century_boy, filename: '20th_century.jpg')
r3.cover_image.attach(io: solid_gold, filename: 'solid_gold.jpg')
r4.cover_image.attach(io: dandy, filename: 'dandy.jpg')

# ADD SEED AUDIO 

mambo = File.open('app/assets/audio/mambo_sun.mp3')
cosmic = File.open('app/assets/audio/cosmic_dancer.mp3')
jeepster = File.open('app/assets/audio/jeepster.mp3')
monolith = File.open('app/assets/audio/monolith.mp3')
lean = File.open('app/assets/audio/lean_woman_blues.mp3')
bang = File.open('app/assets/audio/bang_a_gong.mp3')
planet = File.open('app/assets/audio/planet_queen.mp3')
girl = File.open('app/assets/audio/girl.mp3')
motivator = File.open('app/assets/audio/the_motivator.mp3')
gas = File.open('app/assets/audio/lifes_a_gas.mp3')
rip = File.open('app/assets/audio/rip_off.mp3')
time = File.open('app/assets/audio/there_was_a_time.mp3')
raw = File.open('app/assets/audio/raw_ramp.mp3')
acoustic = File.open('app/assets/audio/planet_queen_acoustic.mp3')
hot = File.open('app/assets/audio/hot_love.mp3')
woodland = File.open('app/assets/audio/woodland_rock.mp3')
easy = URI.open('https://bandplace-seeds.s3.amazonaws.com/audio/solid_gold_easy_action.mp3')

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