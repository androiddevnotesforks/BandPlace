# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_06_164734) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "releases", force: :cascade do |t|
    t.string "title", null: false
    t.text "description"
    t.string "cover_art_url", null: false
    t.integer "artist_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["artist_id"], name: "index_releases_on_artist_id"
    t.index ["title", "artist_id"], name: "index_releases_on_title_and_artist_id", unique: true
    t.index ["title"], name: "index_releases_on_title"
  end

  create_table "songs", force: :cascade do |t|
    t.string "name", null: false
    t.text "lyrics"
    t.string "source_url", null: false
    t.integer "release_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "track", null: false
    t.index ["name", "release_id"], name: "index_songs_on_name_and_release_id", unique: true
    t.index ["name"], name: "index_songs_on_name"
    t.index ["release_id"], name: "index_songs_on_release_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "username", null: false
    t.boolean "is_artist"
    t.string "profile_image_url"
    t.text "bio"
    t.string "password_digest", null: false
    t.string "session_token"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "location"
    t.string "homepage"
    t.string "banner_url"
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username"
  end

end
