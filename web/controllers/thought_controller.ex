defmodule Thoughts.ThoughtController do
  use Thoughts.Web, :controller

  alias Thoughts.Thought

  def index(conn, _params) do
    thoughts = Repo.all(Thought)
    render conn, "index.json", thoughts: thoughts
  end

  def create(conn, params) do
    changeset = Thought.changeset(%Thought{}, params)

    case Repo.insert(changeset) do
      {:ok, thought} ->
        conn
        |> put_status(:created)
        |> render("show.json", thought: thought)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Thoughts.ChangesetView, "error.json", changeset: changeset)
    end
  end
end