class AddContentToProfile < ActiveRecord::Migration[7.0]
  def change
    add_column :profiles, :job_satisfaction, :string
    add_column :profiles, :hours, :string
    add_column :profiles, :job_title, :string
    add_column :profiles, :how, :text
    add_column :profiles, :why, :text
    add_column :profiles, :what, :text
    add_column :profiles, :advice, :text
  end
end
