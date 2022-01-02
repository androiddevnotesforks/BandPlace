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