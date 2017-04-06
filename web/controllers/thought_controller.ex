defmodule Thoughts.ThoughtController do
  use Thoughts.Web, :controller

  alias Thoughts.Thought

  def index(conn, _params) do
    thoughts = Repo.all(Thought)
    render conn, "index.json", thoughts: thoughts
  end
end