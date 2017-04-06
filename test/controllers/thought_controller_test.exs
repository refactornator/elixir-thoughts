defmodule Thoughts.ThoughtControllerTest do
  use Thoughts.ConnCase

  alias Thoughts.Thought
  @valid_attrs %{
    category: "life",
    text: "This is my thought. There are many like it, but this one is mine."
  }
  @invalid_attrs %{}

  setup do
    conn = build_conn()
    {:ok, conn: conn}
  end

  test "#index renders a list of thoughts", %{conn: conn} do
    thought = insert(:thought)

    conn = get conn, thought_path(conn, :index)

    assert json_response(conn, 200) == %{
      "data" => [%{
        "id" => thought.id,
        "category" => thought.category,
        "text" => thought.text,
        "inserted_at" => NaiveDateTime.to_iso8601(thought.inserted_at),
        "updated_at" => NaiveDateTime.to_iso8601(thought.updated_at)
      }]
    }
  end

  test "#create creates and renders a new thought when data is valid", %{conn: conn} do
    conn = post conn, thought_path(conn, :create), thought: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(Thought, @valid_attrs)
  end

  test "#create does not create a new thought and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, thought_path(conn, :create), thought: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end
end