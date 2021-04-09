import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getProject, listenToProjects } from "../services/databaseReads";
import { auth } from "../services/firebase";

/**
 * Refetches node data for a project whenever user state changes
 * @param {String} id
 * @returns {{details: {id: String, name: String, description: String, uid: String},
 * nodes: {id: String, name: String, text: String}[], error: any}} project details and nodes (sorted)
 */
export function useProject(id) {
  const [user] = useAuthState(auth);

  const [details, setDetails] = useState(null);
  const [nodes, setNodes] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProject();
  }, [user]);

  const fetchProject = async () => {
    getProject(id)
      .then((val) => {
        setDetails(val.details);
        // Sort nodes here probably
        setNodes(val.nodes);
      })
      .catch((err) => {
        setError({ ...err });
      });
  };

  return { details, nodes, error };
}
