class ToLearn < ActiveRecord::Base
  validates :name, length: { maximum: 140, minimum: 1 }
end
