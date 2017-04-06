defmodule Thoughts.ThoughtControllerTest do
  use Thoughts.ConnCase

  test "#index renders a list of thoughts" do
    conn = build_conn()
    thought = insert(:thought)

    conn = get conn, thought_path(conn, :index)

    assert json_response(conn, 200) == %{
      "thoughts" => [%{
        "id" => thought.id,
        "category" => thought.category,
        "text" => thought.text,
        "inserted_at" => NaiveDateTime.to_iso8601(thought.inserted_at),
        "updated_at" => NaiveDateTime.to_iso8601(thought.updated_at)
      }]
    }
  end
end