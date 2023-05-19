class Profile < ApplicationRecord
  belongs_to :user
  validates :name, presence: true
  validates :user_id, uniqueness: true
  has_one_attached :photo
  # geocoded_by :address
  # after_validation :geocode, if: :will_save_change_to_address?
end
