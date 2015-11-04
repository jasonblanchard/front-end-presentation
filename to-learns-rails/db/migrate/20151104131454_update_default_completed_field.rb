class UpdateDefaultCompletedField < ActiveRecord::Migration
  def change
    change_column :to_learns, :completed, :boolean, :default => false
  end
end
