defmodule Thoughts.ThoughtView do
  use Thoughts.Web, :view

  def render("index.json", %{thoughts: thoughts}) do
    %{
      thoughts: Enum.map(thoughts, &thought_json/1)
    }
  end

  def thought_json(thought) do
    %{
      id: thought.id,
      category: thought.category,
      text: thought.text,
      inserted_at: thought.inserted_at,
      updated_at: thought.updated_at
    }
  end
end