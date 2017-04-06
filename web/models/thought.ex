defmodule Thoughts.Thought do
  use Thoughts.Web, :model

  schema "thoughts" do
    field :category
    field :text

    timestamps()
  end
end