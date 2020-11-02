package com.vladstepaniuk.tour.repositories;

import com.vladstepaniuk.tour.domain.ERole;
import com.vladstepaniuk.tour.domain.Role;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
