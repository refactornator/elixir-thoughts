defmodule Thoughts.ThoughtView do
  use Thoughts.Web, :view

  def render("index.json", %{thoughts: thoughts}) do
    %{data: render_many(thoughts, Thoughts.ThoughtView, "thought.json")}
  end

  def render("show.json", %{thought: thought}) do
    %{data: render_one(thought, Thoughts.ThoughtView, "thought.json")}
  end

  def render("thought.json", %{thought: thought}) do
    %{id: thought.id,
      category: thought.category,
      text: thought.text,
      inserted_at: thought.inserted_at,
      updated_at: thought.updated_at}
  end
end