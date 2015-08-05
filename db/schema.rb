# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150805015421) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "budget_categories", force: :cascade do |t|
    t.integer  "budget_id",         null: false
    t.integer  "category_id",       null: false
    t.integer  "allocation"
    t.integer  "beginning_balance"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "budget_categories", ["budget_id", "category_id"], name: "index_budget_categories_on_budget_id_and_category_id", using: :btree

  create_table "budgets", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date     "start_date", null: false
    t.date     "end_date",   null: false
  end

  create_table "categories", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "transactions", force: :cascade do |t|
    t.date     "occurred_on",             null: false
    t.string   "payee",                   null: false
    t.integer  "credit",      default: 0, null: false
    t.integer  "debit",       default: 0, null: false
    t.string   "memo"
    t.integer  "budget_id"
    t.integer  "category_id"
    t.integer  "user_id",                 null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
