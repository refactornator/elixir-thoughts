defmodule Thoughts.Factory do
  use ExMachina.Ecto, repo: Thoughts.Repo

  def thought_factory do
    %Thoughts.Thought{
      category: "work",
      text: "This is my thought. There are many like it, but this one is mine."
    }
  end
end