# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# RESET DB
User.destroy_all

# USERS
u1 = User.create!(email: 'test@tests.test', username: 'test', is_artist: true,
profile_image_url: 'placeholder.url', bio: 'This is a test artist', password: '123123')
u2 = User.create!(email: 'abc@123.biz', username: 'rotary_fan', is_artist: false,
profile_image_url: 'placeholder.url', bio: 'This is a test fan', password: '123123')
u3 = User.create!(email: 'cosmicdancer@jeepster.gov', username: 'T. Rex', is_artist: true,
profile_image_url: 'placeholder.url', bio: "Life's a gas", password: 'rawramp')

Release.destroy_all 

r1 = Release.create!(title: 'Electric Warrior', description: 'One of the greatest glam-rock records ever recorded - 1971', cover_art_url: 'placeholder.url', artist_id: u3.id)
r2 = Release.create!(title: '20th Century Boy (Single)', cover_art_url: 'placeholder.url', artist_id: u3.id)
r3 = Release.create!(title: 'Solid Gold Easy Action (Single)', cover_art_url: 'placeholder.url', artist_id: u3.id)
r4 = Release.create!(title: 'Dandy In The Underworld', cover_art_url: 'placeholder.url', artist_id: u3.id)

Song.destroy_all 

s1 = Song.create!(name: 'Mambo Sun', track: 1, source_url: 'placeholder.url', release_id: r1.id)
s2 = Song.create!(name: 'Cosmic Dancer', track: 2, source_url: 'placeholder.url', release_id: r1.id)
s3 = Song.create!(name: 'Jeepster', track: 3, source_url: 'placeholder.url', release_id: r1.id)
s4 = Song.create!(name: 'Monolith', track: 4, source_url: 'placeholder.url', release_id: r1.id)
s5 = Song.create!(name: 'Lean Woman Blues', track: 5, source_url: 'placeholder.url', release_id: r1.id)
s6 = Song.create!(name: 'Bang a Gong (Get It On)', track: 6, source_url: 'placeholder.url', release_id: r1.id)
s7 = Song.create!(name: 'Planet Queen', track: 7, source_url: 'placeholder.url', release_id: r1.id)
s8 = Song.create!(name: 'Girl', track: 8, source_url: 'placeholder.url', release_id: r1.id)
s9 = Song.create!(name: 'The Motivator', track: 9, source_url: 'placeholder.url', release_id: r1.id)
s10 = Song.create!(name: "Life's a Gas", track: 10, source_url: 'placeholder.url', release_id: r1.id)
s11 = Song.create!(name: 'Rip Off', track: 11, source_url: 'placeholder.url', release_id: r1.id)
s12 = Song.create!(name: 'There Was a Time', track: 12, source_url: 'placeholder.url', release_id: r1.id)
s13 = Song.create!(name: 'Raw Ramp', track: 13, source_url: 'placeholder.url', release_id: r1.id)
s14 = Song.create!(name: 'Planet Queen (Acoustic)', track: 14, source_url: 'placeholder.url', release_id: r1.id)
s15 = Song.create!(name: 'Hot Love', track: 15, source_url: 'placeholder.url', release_id: r1.id)
s16 = Song.create!(name: 'Woodland Rock', track: 16, source_url: 'placeholder.url', release_id: r1.id)
s17 = Song.create!(name: 'Solid Gold Easy Action', track: 1, source_url: 'placeholder.url', release_id: r3.id, lyrics: 
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
20th century toy I wanna be your boy", source_url: 'placeholder.url', release_id: r2.id)
s19 = Song.create!(name: 'Teen Riot Structure', track: 1, source_url: 'placeholder.url', release_id: r4.id)