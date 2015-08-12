class AddUserProfileData < ActiveRecord::Migration
  def change
    add_column :users, :avatar, :string
    add_column :users, :bank, :string
    add_column :users, :user_name, :string
  end
end
