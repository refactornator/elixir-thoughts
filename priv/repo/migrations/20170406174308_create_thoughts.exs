defmodule Thoughts.Repo.Migrations.CreateThoughts do
  use Ecto.Migration

  def change do
    create table(:thoughts) do
      add :category, :string
      add :text, :text

      timestamps()
    end
  end
end
