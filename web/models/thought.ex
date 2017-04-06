defmodule Thoughts.Thought do
  use Thoughts.Web, :model

  schema "thoughts" do
    field :category
    field :text

    timestamps()
  end

  @required_fields [:category, :text]
  @optional_fields []

  @doc """
  Creates a changeset based on the `model` and `params`.
  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @optional_fields ++ @required_fields)
    |> validate_required(@required_fields)
  end
end