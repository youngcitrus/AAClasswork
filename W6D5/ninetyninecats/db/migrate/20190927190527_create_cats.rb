class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.date :birth_date, null: false
      t.string :color, null: false #model validation
      t.string :name, null: false
      t.string :sex, null: false, limit: 1 #model validation
      t.text :description, null: false
  
      t.timestamps
    end

    add_index :cats, :name

  end
end
