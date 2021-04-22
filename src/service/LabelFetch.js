class LabelFetch {
  async create(body) {
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    const response = await fetch("http://localhost:3001/labels", option);
    return response.json();
  }

  async read() {
    const response = await fetch("http://localhost:3001/labels");
    return response.json();
  }

  async delete(id) {
    const option = {
      method: "DELETE",
    };
    const response = await fetch(`http://localhost:3001/labels/${id}`, option);
    return response.json();
  }

  async update(id, body) {
    const option = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    const response = await fetch(`http://localhost:3001/labels/${id}`, option);
    return response.json();
  }
}

export default new LabelFetch();
