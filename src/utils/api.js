import {SERVER_URL} from './constant'


export const LabelAPI = {
  getLabels: async () => {
    try {
      const response = await fetch(SERVER_URL.ISSUES)
      return response.json()
    } catch (err) {
      console.error('getLabels Error', err)
    }
  },
  deleteLabel: ({id}) => {
    return deleteData(`${SERVER_URL.ISSUES + id}`)
  },
  putLabel: ({id, labelName, desc, color}) => {
    return putData(`${SERVER_URL.ISSUES + id}`, {
      labelName,
      desc,
      color
    })
  },
  postLabel: ({labelName, desc, color}) => {
    return postData(SERVER_URL.ISSUES, {
      labelName,
      desc,
      color
    })
  }
}

export const MilestonesAPI = {
  getMilestones: async () => {
    try {
      const response = await fetch(SERVER_URL.MILESTONES)
      return response.json()
    } catch (err) {
      console.error('getMilestones Error', err)
    }
  },
  deleteMilestone: ({id}) => {
    return deleteData(`${SERVER_URL.MILESTONES + id}`)
  },
  putMilestone:  ({id, title, date, desc, state}) => {
    return putData(`${SERVER_URL.MILESTONES + id}`, {
      title,
      date,
      desc,
      state
    })
  },
  postMilestone: ({title, date, desc, state}) => {
    return postData(SERVER_URL.MILESTONES, {
      title,
      date,
      desc,
      state
    })
  }
}


function deleteData(url) {
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

function putData(url = '', data = {}) {
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

function postData(url = '', data = {}) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
