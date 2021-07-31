import { gql } from "@apollo/client";

const PRE_FLIGHT_QUERY = gql`
  mutation PreFlight($username: String!, $token: String!) {
    preflightUsername(username: $username, token: $token) {
      validCaptcha
      validUsername
    }
  }
`;

interface PreflightInterface {}

export default PRE_FLIGHT_QUERY;
