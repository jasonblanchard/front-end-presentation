class CreateToLearns < ActiveRecord::Migration
  def change
    create_table :to_learns do |t|
      t.string :name
      t.boolean :completed

      t.timestamps null: false
    end
  end
end
